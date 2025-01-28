use crate::web::errors::ErrorResponseExt;
use crate::web::sessions::OptionalSession;
use crate::{app::App, web::errors::ErrorResponse};
use actix_web::http::StatusCode;
use actix_web::web::Data;
use actix_web::{Either, HttpResponse, Responder};
use dav_server::{actix::DavRequest, actix::DavResponse, DavHandler};
use dav_server::{fakels::FakeLs, localfs::LocalFs};

use crate::utils::is_valid_username;

pub async fn handler(
    session: OptionalSession,
    app: Data<App>,
    req: DavRequest,
) -> Result<Either<impl Responder, HttpResponse>, ErrorResponse> {
    let authorization = req
        .request
        .headers()
        .get("Authorization")
        .map(|inner| inner.to_str())
        .and_then(Result::ok);

    let username = match authorization {
        Some(auth) => {
            let res = data_encoding::BASE64
                .decode(auth.strip_prefix("Basic ").unwrap_or_default().as_bytes())
                .map(String::from_utf8)
                .map_err(|_| ErrorResponse::bad_request("invalid base64"))?
                .map_err(|_| ErrorResponse::bad_request("invalid utf8"))?;

            let (username, password) = res
                .split_once(':')
                .ok_or_else(|| ErrorResponse::bad_request("invalid auth header"))?;

            if !is_valid_username(username) {
                return Err(ErrorResponse::bad_request("invalid username"));
            }

            app.users
                .verify_password(username, password)
                .await
                .api_error(StatusCode::UNAUTHORIZED, None)?;

            username.to_string()
        }
        None => match session.username() {
            Some(username) => username.to_string(),
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
        .user_home(&username)
        .api_error(StatusCode::NOT_FOUND, None)?;

    let dav_server = DavHandler::builder()
        .strip_prefix("/api/webdav")
        .filesystem(LocalFs::new(path, false, false, false))
        .locksystem(FakeLs::new())
        .build_handler();

    let res: DavResponse = dav_server.handle(req.request).await.into();
    Ok(Either::Left(res))
}
