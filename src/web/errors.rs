use std::fmt::{Debug, Display, Formatter};

use actix_web::http::StatusCode;
use actix_web::ResponseError;

#[derive(Clone)]
pub struct ErrorResponse(StatusCode, String);

impl ErrorResponse {
    pub fn new(status: StatusCode, message: &str) -> Self {
        Self(status, message.to_string())
    }

    pub fn unauthorized(message: &str) -> Self {
        Self(StatusCode::UNAUTHORIZED, message.to_string())
    }

    pub fn internal_error(message: &str) -> Self {
        Self(StatusCode::INTERNAL_SERVER_ERROR, message.to_string())
    }
}

impl Debug for ErrorResponse {
    fn fmt(&self, f: &mut Formatter<'_>) -> std::fmt::Result {
        write!(
            f,
            "{:?}: {:?}",
            self.0.canonical_reason().unwrap_or("unknown"),
            self.1
        )
    }
}

impl Display for ErrorResponse {
    fn fmt(&self, f: &mut Formatter<'_>) -> std::fmt::Result {
        write!(
            f,
            "{:?}: {:?}",
            self.0.canonical_reason().unwrap_or("unknown"),
            self.1
        )
    }
}

impl ResponseError for ErrorResponse {
    fn status_code(&self) -> StatusCode {
        self.0
    }
}

pub trait ErrorResponseExt<T> {
    fn api_error(self, status: StatusCode, message: Option<&str>) -> Result<T, ErrorResponse>;
    fn api_internal_error(self) -> Result<T, ErrorResponse>
    where
        Self: Sized,
    {
        self.api_error(
            StatusCode::INTERNAL_SERVER_ERROR,
            Some("internal server error"),
        )
    }
    fn api_not_found(self) -> Result<T, ErrorResponse>
    where
        Self: Sized,
    {
        self.api_error(StatusCode::NOT_FOUND, None)
    }
    fn api_unauthorized(self) -> Result<T, ErrorResponse>
    where
        Self: Sized,
    {
        self.api_error(StatusCode::UNAUTHORIZED, None)
    }
}

impl<T, E: Into<eyre::Error>> ErrorResponseExt<T> for Result<T, E> {
    fn api_error(self, status: StatusCode, message: Option<&str>) -> Result<T, ErrorResponse> {
        self.map_err(|e| {
            let message = message.unwrap_or(status.canonical_reason().unwrap_or("unknown"));
            log::warn!("api error: {message}: {}", e.into());
            ErrorResponse(status, message.to_string())
        })
    }
}

impl<T> ErrorResponseExt<T> for Option<T> {
    fn api_error(self, status: StatusCode, message: Option<&str>) -> Result<T, ErrorResponse> {
        self.ok_or_else(|| {
            let message = message.unwrap_or(status.canonical_reason().unwrap_or("unknown"));
            log::warn!("api error: {message}");
            ErrorResponse(status, message.to_string())
        })
    }
}
