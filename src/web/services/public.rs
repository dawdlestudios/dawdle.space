use crate::{app::Website, web::errors::ErrorResponse, App};
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
pub async fn get_sites(app: Data<App>) -> Result<impl Responder, ErrorResponse> {
    let sites = app
        .sites
        .iter()
        .map(|site| {
            let website = site.value();
            let hostname = site.key();

            match website {
                Website::User(username) => json!({
                    "type": "user",
                    "username": username,
                }),
                Website::Site(username, _path) => json!({
                    "type": "site",
                    "hostname": hostname,
                    "username": username,
                }),
            }
        })
        .collect::<serde_json::Value>();

    Ok((Json(sites)))
}
