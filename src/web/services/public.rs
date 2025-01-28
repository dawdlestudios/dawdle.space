use crate::{web::errors::ErrorResponse, App};
use actix_web::{
    get,
    web::{Data, Json},
    Responder,
};
use serde_json::json;
use utoipa_actix_web::service_config::ServiceConfig;

const PUBLIC: &str = "public";

pub fn configure(config: &mut ServiceConfig) {
    config.service(get_sites);
}

#[utoipa::path(
    tag = PUBLIC,
    responses(
        (status = 200, description = "a list of sites", body = serde_json::Value),
    )
)]
#[get("/sites")]
pub async fn get_sites(_app: Data<App>) -> Result<impl Responder, ErrorResponse> {
    Ok(Json(json!({
        "sites": [],
    })))
}
