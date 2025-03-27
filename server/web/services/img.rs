use actix_web::{
    Responder, get,
    web::{self, Data},
};
use utoipa_actix_web::service_config::ServiceConfig;

use crate::App;

pub fn configure(config: &mut ServiceConfig) {
    config.service(load_image);
}

#[utoipa::path(
    tag = "img",
    responses(
        (status = 200, body = String),
    )
)]
#[get("/{site_id}")]
async fn load_image(app: Data<App>, path: web::Path<String>) -> impl Responder {
    let site = path.into_inner();
    let image_path = format!("/path/to/images/{}.png", site);

    ""
}
