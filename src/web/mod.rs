use crate::app::{App, Website};
use crate::web::errors::{APIError, APIResult, NOT_FOUND};

use axum::body::Body;
use axum::extract::Request;
use axum::http::{header, HeaderValue, Response, StatusCode};
use axum::response::IntoResponse;
use axum::routing::*;
use axum::{Router, ServiceExt as AxumServiceExt};
use errors::ApiErrorExt;
use eyre::Result;
use std::{convert::Infallible, net::SocketAddr};
use tower::{Service, ServiceBuilder, ServiceExt as TowerServiceExt};
use tower_http::set_header::SetResponseHeaderLayer;

mod api;
mod api_admin;
mod chat;
mod errors;
mod files;
mod middleware;
mod webdav;

pub async fn run(state: App, addr: SocketAddr) -> Result<()> {
    let admin_router = Router::new()
        .route("/", post(api_admin::is_admin))
        .route("/applications", get(api_admin::get_applications))
        .route(
            "/applications/approve",
            post(api_admin::approve_application),
        )
        .route(
            "/applications/unapprove",
            post(api_admin::unapprove_application),
        )
        .route(
            "/applications/username",
            post(api_admin::update_application_username),
        )
        .route("/applications", delete(api_admin::delete_application))
        .route("/users", get(api_admin::get_users))
        .route("/user/{username}", delete(api_admin::delete_user));

    let www_path = state
        .config
        .user_home("henry")
        .unwrap()
        .join("sites")
        .join("dawdle.space");

    let api_router = Router::new()
        .nest(
            "/api",
            Router::new()
                .nest("/admin", admin_router)
                .route("/chat", get(chat::handler))
                .route("/login", post(api::login))
                .route("/logout", post(api::logout))
                .route("/me", get(api::get_me))
                .route("/password", post(api::change_password))
                .route("/minecraft", post(api::update_minecraft_username))
                .route("/public_key", post(api::add_public_key))
                .route("/public_key", delete(api::remove_public_key))
                .route("/apply", post(api::apply))
                .route("/claim", post(api::claim))
                .route("/sites", get(api::get_sites))
                .fallback(|| async {
                    APIError::new(StatusCode::NOT_FOUND, "not found").into_response()
                }),
        )
        .route("/api/webdav", any(webdav::handler))
        .route("/api/webdav/", any(webdav::handler))
        .route("/api/webdav/{*rest}", any(webdav::handler))
        .fallback_service(files::create_dir_service(
            www_path.clone(),
            www_path.join("404.html"),
            NOT_FOUND,
        ))
        .with_state(state.clone());

    let listener = tokio::net::TcpListener::bind(addr).await?;

    let service = DawdleService {
        api_service: api_router,
        state,
    };

    let x = ServiceBuilder::new()
        .layer(SetResponseHeaderLayer::if_not_present(
            header::SERVER,
            HeaderValue::from_static("dawdle.space"),
        ))
        .layer(SetResponseHeaderLayer::if_not_present(
            header::REFERRER_POLICY,
            HeaderValue::from_static("strict-origin"),
        ))
        .layer(SetResponseHeaderLayer::if_not_present(
            header::X_CONTENT_TYPE_OPTIONS,
            HeaderValue::from_static("nosniff"),
        ))
        .layer(SetResponseHeaderLayer::if_not_present(
            header::X_FRAME_OPTIONS,
            HeaderValue::from_static("DENY"),
        ))
        .layer(SetResponseHeaderLayer::if_not_present(
            header::X_XSS_PROTECTION,
            HeaderValue::from_static("1; mode=block"),
        ))
        .service(service);

    axum::serve(listener, x.into_make_service()).await?;
    Ok(())
}

#[derive(Clone)]
struct DawdleService {
    api_service: Router,
    state: App,
}

impl Service<Request> for DawdleService {
    type Response = axum::http::Response<Body>;
    type Error = Infallible;
    type Future = std::pin::Pin<
        Box<dyn std::future::Future<Output = Result<Response<Body>, Infallible>> + Send>,
    >;

    fn poll_ready(
        &mut self,
        _cx: &mut std::task::Context<'_>,
    ) -> std::task::Poll<Result<(), Infallible>> {
        std::task::Poll::Ready(Ok(()))
    }

    fn call(&mut self, req: Request) -> Self::Future {
        let state = self.state.clone();
        let mut api_service = self.api_service.clone();

        Box::pin(async move {
            let Some(Ok(hostname_header)) = req.headers().get("HOST").map(|h| h.to_str()) else {
                return Ok(NOT_FOUND.into_response());
            };

            let site = match select_service(hostname_header) {
                Ok(SelectedService::DawdleSpace) => {
                    return Ok(api_service.call(req).await.unwrap())
                }
                Ok(SelectedService::Subdomain(subdomain)) => state.sites.get(&subdomain),
                Ok(SelectedService::CustomDomain(hostname)) => state.sites.get(&hostname),
                Err(_err) => return Ok(NOT_FOUND.into_response()),
            };

            let Some(site) = site else {
                return Ok(NOT_FOUND.into_response());
            };

            match site.value() {
                Website::User(username) => {
                    let Some(path) = state.config.user_public_path(username) else {
                        return Ok(NOT_FOUND.into_response());
                    };
                    let service =
                        files::create_dir_service(path.clone(), path.join("404.html"), NOT_FOUND);
                    let res = service.oneshot(req).await;
                    Ok(res.into_response())
                }
                Website::Site(username, path) => {
                    let Some(path) = state.config.project_path(username, path) else {
                        return Ok(NOT_FOUND.into_response());
                    };
                    let service =
                        files::create_dir_service(path.clone(), path.join("404.html"), NOT_FOUND);
                    let res = service.oneshot(req).await;
                    Ok(res.into_response())
                }
            }
        })
    }
}

#[derive(Debug)]
enum SelectedService {
    DawdleSpace,
    Subdomain(String),
    CustomDomain(String),
}

fn select_service(hostname_header: &str) -> APIResult<SelectedService> {
    let (hostname, port) = if let Some(colon) = hostname_header.find(':') {
        let (hostname, port) = hostname_header.split_at(colon);
        (hostname, &port[1..])
    } else {
        (hostname_header, "80")
    };

    let Ok(domain) = addr::parse_domain_name(hostname) else {
        return Err(APIError::new(StatusCode::BAD_REQUEST, "invalid hostname"));
    };

    if !cfg!(debug_assertions) && port != "80" {
        return Err(APIError::new(StatusCode::BAD_REQUEST, "invalid port"));
    }

    if is_api(domain) {
        return Ok(SelectedService::DawdleSpace);
    }

    Ok(match is_on_dawdle_space(domain) {
        true => {
            let subdomain = domain
                .prefix()
                .map(|s| s.to_string())
                .api_error(StatusCode::BAD_REQUEST, Some("invalid hostname"))?;
            SelectedService::Subdomain(subdomain)
        }
        false => SelectedService::CustomDomain(hostname.to_string()),
    })
}

fn is_on_dawdle_space(domain: addr::domain::Name) -> bool {
    if cfg!(debug_assertions) {
        (domain.root() == Some("dawdle.localhost") && domain.suffix() == "localhost")
            || (domain.root().is_none() && domain.suffix() == "localhost")
    } else {
        domain.root() == Some("dawdle.space") && domain.suffix() == "space"
    }
}

fn is_api(domain: addr::domain::Name) -> bool {
    if cfg!(debug_assertions) {
        is_on_dawdle_space(domain) && domain.prefix().is_none()
    } else {
        domain.root() == Some("dawdle.space")
            && domain.prefix().is_none()
            && domain.suffix() == "space"
    }
}
