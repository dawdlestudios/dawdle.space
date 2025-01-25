use crate::app::{App, Session};
use actix_web::FromRequest;
use time::Duration;

use super::errors::ErrorResponse;
use futures::{
    future::{self, FutureExt, LocalBoxFuture},
    TryFutureExt,
};

pub const SESSION_COOKIE_MAX_AGE: Duration = Duration::days(7);
pub const USERNAME_COOKIE_MAX_AGE: Duration = Duration::days(7);
pub const USERNAME_COOKIE_NAME: &str = "clientside_username";
pub const ROLE_COOKIE_NAME: &str = "clientside_role";
pub const SESSION_COOKIE_NAME: &str = "session_token";

pub struct Admin();

impl FromRequest for Admin {
    type Error = ErrorResponse;
    type Future = LocalBoxFuture<'static, Result<Self, Self::Error>>;

    fn from_request(
        req: &actix_web::HttpRequest,
        payload: &mut actix_web::dev::Payload,
    ) -> Self::Future {
        let state = req.app_data::<App>().unwrap().clone();

        RequiredSession::from_request(req, payload)
            .and_then(|session| async move {
                let Ok(Some(user)) = state.users.get(session.username()).await else {
                    return Err(ErrorResponse::unauthorized("user not found"));
                };

                if user.role.as_deref() == Some("admin") {
                    Ok(Admin())
                } else {
                    Err(ErrorResponse::unauthorized("insufficient permissions"))
                }
            })
            .boxed_local()
    }
}

pub struct OptionalSession(Option<Session>);

impl OptionalSession {
    pub fn username(&self) -> Option<&str> {
        self.0.as_ref().map(|s| &s.username[..])
    }
}

impl FromRequest for OptionalSession {
    type Error = ErrorResponse;
    type Future = LocalBoxFuture<'static, Result<Self, Self::Error>>;

    fn from_request(
        req: &actix_web::HttpRequest,
        _payload: &mut actix_web::dev::Payload,
    ) -> Self::Future {
        let Some(session_token) = req.cookie(SESSION_COOKIE_NAME) else {
            return future::ok(OptionalSession(None)).boxed_local();
        };

        let state = req.app_data::<App>().unwrap().clone();

        async move {
            match state.sessions.verify(session_token.value()).await {
                Ok(session) => Ok(OptionalSession(session)),
                Err(_) => Ok(OptionalSession(None)),
            }
        }
        .boxed_local()
    }
}

pub struct RequiredSession(pub Session);

impl RequiredSession {
    pub fn username(&self) -> &str {
        &self.0.username
    }
}

impl FromRequest for RequiredSession {
    type Error = ErrorResponse;
    type Future = LocalBoxFuture<'static, Result<Self, Self::Error>>;

    fn from_request(
        req: &actix_web::HttpRequest,
        payload: &mut actix_web::dev::Payload,
    ) -> Self::Future {
        OptionalSession::from_request(req, payload)
            .and_then(|session| match session.0 {
                Some(session) => future::ok(RequiredSession(session)),
                None => future::err(ErrorResponse::unauthorized("session required")),
            })
            .boxed_local()
    }
}
