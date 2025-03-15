pub mod admin;
pub mod auth;
pub mod me;
pub mod public;
pub mod webdav;

use super::{errors, sessions};

use actix_web::web;
use serde::{Deserialize, Serialize};
use utoipa::ToSchema;
use utoipa_actix_web::{scope, service_config::ServiceConfig};

#[derive(Serialize, Deserialize, Debug, Clone, ToSchema)]
pub struct SuccessResponse {
    success: bool,
}

impl Default for SuccessResponse {
    fn default() -> Self {
        Self { success: true }
    }
}

pub fn configure(config: &mut ServiceConfig) {
    config
        .service(scope("/admin").configure(admin::configure))
        .service(scope("/auth").configure(auth::configure))
        .service(scope("/me").configure(me::configure))
        .service(scope("/public").configure(public::configure))
        .service(scope("/webdav").map(|c| c.default_service(web::to(webdav::handler))));
}
