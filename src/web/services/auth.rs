use actix_web::cookie::{Cookie, SameSite};
use actix_web::http::StatusCode;
use actix_web::{post, HttpRequest, HttpResponse, HttpResponseBuilder, Responder};
use utoipa::ToSchema;
use utoipa_actix_web::service_config::ServiceConfig;

use super::errors::{ErrorResponse, ErrorResponseExt};
use super::{sessions, SuccessResponse};

use crate::app::App;

use actix_web::web::{Data, Json};
use serde::{Deserialize, Serialize};

const AUTH: &str = "auth";

pub fn configure(config: &mut ServiceConfig) {
    config
        .service(login)
        .service(logout)
        .service(apply)
        .service(claim);
}

#[derive(Deserialize, Serialize, ToSchema)]
pub struct LoginRequest {
    username: String,
    password: String,
}

#[utoipa::path(
    tag = AUTH,
    responses(
        (status = 200, description = "successfully logged in", body = SuccessResponse),
        (status = 401, description = "invalid username or password"),
        (status = 500, description = "internal server error")
    )
)]
#[post("/login")]
pub async fn login(
    app: Data<App>,
    body: Json<LoginRequest>,
) -> Result<impl Responder, ErrorResponse> {
    let LoginRequest { username, password } = body.0;
    let username = username.to_lowercase();

    let valid = app
        .users
        .verify_password(&username, &password)
        .await
        .api_unauthorized()?;

    if !valid {
        return Err(ErrorResponse::unauthorized("invalid username or password"));
    };

    let user = app
        .users
        .get(&username)
        .await
        .api_internal_error()?
        .api_unauthorized()?;

    let session = app.sessions.create(&username).await.api_internal_error()?;

    let session_cookie = Cookie::build(sessions::SESSION_COOKIE_NAME, session)
        .max_age(sessions::SESSION_COOKIE_MAX_AGE)
        .http_only(true)
        .path("/api")
        .secure(!cfg!(debug_assertions))
        .same_site(SameSite::Strict)
        .finish();

    let username_cookie = Cookie::build(sessions::USERNAME_COOKIE_NAME, username)
        .max_age(sessions::USERNAME_COOKIE_MAX_AGE)
        .http_only(false)
        .path("/")
        .secure(!cfg!(debug_assertions))
        .same_site(SameSite::Strict)
        .finish();

    let mut resp = HttpResponse::Ok().json(SuccessResponse { success: true });
    _ = resp.add_cookie(&session_cookie);
    _ = resp.add_cookie(&username_cookie);

    if let Some(role) = user.role {
        let role_cookie = Cookie::build(sessions::ROLE_COOKIE_NAME, role.to_string())
            .max_age(sessions::USERNAME_COOKIE_MAX_AGE)
            .http_only(false)
            .path("/")
            .secure(!cfg!(debug_assertions))
            .same_site(SameSite::Strict)
            .finish();

        _ = resp.add_cookie(&role_cookie);
    }

    Ok(resp)
}

#[utoipa::path(
    tag = AUTH,
    responses(
        (status = 200, body = SuccessResponse),
    )
)]
#[post("/logout")]
pub async fn logout(app: Data<App>, req: HttpRequest) -> impl Responder {
    let session_token = req
        .cookie(sessions::SESSION_COOKIE_NAME)
        .map(|c| c.value().to_string());

    if let Some(session_token) = session_token {
        let _ = app.sessions.logout(&session_token).await;
    }

    let mut session_cookie = Cookie::build(sessions::SESSION_COOKIE_NAME, "")
        .path("/api")
        .finish();
    let mut username_cookie = Cookie::build(sessions::USERNAME_COOKIE_NAME, "")
        .path("/")
        .finish();
    let mut role_cookie = Cookie::build(sessions::ROLE_COOKIE_NAME, "")
        .path("/")
        .finish();

    session_cookie.make_removal();
    username_cookie.make_removal();
    role_cookie.make_removal();

    HttpResponseBuilder::new(StatusCode::OK)
        .cookie(session_cookie)
        .cookie(username_cookie)
        .cookie(role_cookie)
        .json(SuccessResponse { success: true })
}

#[derive(Debug, serde::Deserialize, ToSchema)]
pub struct ApplicationRequest {
    pub username: String,
    pub email: String,
    pub about: String,
}

#[utoipa::path(
    tag = AUTH,
    responses(
        (status = 200, body = SuccessResponse),
    )
)]
#[post("/apply")]
pub async fn apply(
    app: Data<App>,
    body: Json<ApplicationRequest>,
) -> Result<Json<SuccessResponse>, ErrorResponse> {
    let application = body.0;

    app.applications
        .apply(
            &application.username,
            &application.email,
            &application.about,
        )
        .await
        .api_internal_error()?;

    Ok(Json(SuccessResponse { success: true }))
}

#[derive(Debug, serde::Deserialize, ToSchema)]
pub struct ClaimRequest {
    pub token: String,
    pub username: String,
    pub password: String,
}

#[utoipa::path(
    tag = AUTH,
    responses(
        (status = 200, body = SuccessResponse),
    )
)]
#[post("/claim")]
pub async fn claim(
    app: Data<App>,
    body: Json<ClaimRequest>,
) -> Result<Json<SuccessResponse>, ErrorResponse> {
    let token = body.0;

    app.applications
        .claim(&token.token, &token.username, &token.password)
        .await
        .api_internal_error()?;

    app.sites
        .create(
            &format!("{username}.dawdle.space", username = token.username),
            &token.username,
        )
        .await
        .api_internal_error()?;

    Ok(Json(SuccessResponse { success: true }))
}
