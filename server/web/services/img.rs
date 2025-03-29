use actix_files::NamedFile;
use actix_web::{
    Either, HttpResponse, Responder, get,
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
async fn load_image(
    app: Data<App>,
    path: web::Path<String>,
) -> Either<impl Responder, impl Responder> {
    let Ok(file) = app
        .config
        .site_screenshot(&path)
        .and_then(|file| NamedFile::open(file).map_err(|_| eyre::eyre!("File not found")))
    else {
        return Either::Right(HttpResponse::NotFound().finish());
    };

    Either::Left(file)
}
