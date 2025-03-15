use crate::web::errors::ErrorResponseExt;
use crate::web::sessions::OptionalSession;
use crate::{app::App, web::errors::ErrorResponse};
use actix_web::http::StatusCode;
use actix_web::web::Data;
use actix_web::{Either, HttpResponse, Responder};
use dav_server::{DavHandler, actix::DavRequest, actix::DavResponse};
use dav_server::{fakels::FakeLs, localfs::LocalFs};

use crate::utils::is_valid_username;

pub async fn handler(
    session: OptionalSession,
    app: Data<App>,
    req: DavRequest,
) -> Result<Either<impl Responder, HttpResponse>, ErrorResponse> {
    let path = req.request.uri().path().to_string();
    println!("path: {}", path);
    let path = path
        .strip_prefix("/api/webdav/")
        .ok_or_else(|| ErrorResponse::bad_request("invalid path"))?;

    let site_id = path
        .split('/')
        .next()
        .ok_or_else(|| ErrorResponse::bad_request("invalid path"))?;

    if !cuid2::is_slug(site_id) {
        return Err(ErrorResponse::bad_request("invalid site id"));
    }

    let authorization = req
        .request
        .headers()
        .get("Authorization")
        .map(|inner| inner.to_str())
        .and_then(Result::ok);

    match authorization {
        // authentication via http basic auth
        Some(auth) => {
            let res = data_encoding::BASE64
                .decode(auth.strip_prefix("Basic ").unwrap_or_default().as_bytes())
                .map(String::from_utf8)
                .map_err(|_| ErrorResponse::bad_request("invalid base64"))?
                .map_err(|_| ErrorResponse::bad_request("invalid utf8"))?;

            let (username, token) = res
                .split_once(':')
                .ok_or_else(|| ErrorResponse::bad_request("invalid auth header"))?;

            if !is_valid_username(username) {
                return Err(ErrorResponse::bad_request("invalid username"));
            }

            if !app.sites.is_owner(site_id, username) {
                return Err(ErrorResponse::not_found("site not found"));
            }

            if !app.sites.validate_token(site_id, token) {
                return Err(ErrorResponse::unauthorized("invalid token"));
            }
        }

        // authentication via session cookie
        None => match session.username() {
            Some(username) => {
                if !app.sites.is_owner(site_id, username) {
                    return Err(ErrorResponse::not_found("site not found"));
                };
            }

            // no authentication, request basic auth
            None => {
                return Ok(Either::Right(
                    HttpResponse::Unauthorized()
                        .append_header(("WWW-Authenticate", "Basic realm=\"webdav\""))
                        .finish(),
                ));
            }
        },
    };

    let path = app
        .config
        .site_dir(site_id)
        .api_error(StatusCode::NOT_FOUND, Some("site not found"))?;

    let dav_server = DavHandler::builder()
        .strip_prefix(format!("/api/webdav/{site_id}"))
        .filesystem(LocalFs::new(path, false, false, false))
        .locksystem(FakeLs::new())
        .build_handler();

    let res: DavResponse = dav_server.handle(req.request).await.into();
    Ok(Either::Left(res))
}
