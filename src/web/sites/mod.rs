use actix_web::{HttpRequest, Responder};

pub async fn handle(req: HttpRequest) -> Result<impl Responder, actix_web::Error> {
    Ok("Hello, world!")
}
