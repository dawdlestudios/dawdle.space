use crate::{App, web::errors::ErrorResponse};
use actix_web::{
    get,
    web::{Data, Json},
};
use serde::{Deserialize, Serialize};
use utoipa::ToSchema;
use utoipa_actix_web::service_config::ServiceConfig;

const PUBLIC: &str = "public";

pub fn configure(config: &mut ServiceConfig) {
    config.service(get_sites);
}

#[derive(Debug, Deserialize, Serialize, ToSchema)]
struct SitesResponse {
    sites: Vec<SiteResponse>,
}

#[derive(Debug, Deserialize, Serialize, ToSchema)]
#[serde(rename_all = "camelCase")]
struct SiteResponse {
    id: String,
    domain: String,
    owner: String,
    custom_domain: Option<String>,
}

#[utoipa::path(
    tag = PUBLIC,
    responses(
        (status = 200, description = "a list of sites", body = SitesResponse),
    )
)]
#[get("/sites")]
pub async fn get_sites(app: Data<App>) -> Result<Json<SitesResponse>, ErrorResponse> {
    let sites = app.sites.all();

    let sites = sites
        .into_iter()
        .filter(|site| site.site_id != "www")
        .filter_map(|site| {
            if site.hidden || site.disabled {
                return None;
            }
            Some(SiteResponse {
                id: site.site_id,
                domain: site.domain,
                owner: site.owner,
                custom_domain: site.custom_domain,
            })
        })
        .collect();

    Ok(Json(SitesResponse { sites }))
}
