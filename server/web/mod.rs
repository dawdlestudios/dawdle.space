use eyre::Result;
use std::net::SocketAddr;

use actix_web::middleware::Logger;
use actix_web::web::{self, Data};
use actix_web::{guard, App, HttpServer};

use utoipa::openapi::security::{ApiKeyValue, SecurityScheme};
use utoipa::OpenApi;
use utoipa_actix_web::{scope, AppExt};

pub mod errors;
pub mod sessions;

mod services;
mod sites;

#[derive(OpenApi)]
#[openapi(
    tags(
        (name = "admin", description = "Admin interface endpoints"),
        (name = "auth", description = "Authentication endpoints"),
        (name = "me", description = "User profile endpoints"),
        (name = "public", description = "Public endpoints"),
    ),
    modifiers(&SecurityAddon)
)]
struct ApiDoc;

struct SecurityAddon;

impl utoipa::Modify for SecurityAddon {
    fn modify(&self, openapi: &mut utoipa::openapi::OpenApi) {
        let components = openapi.components.as_mut().unwrap(); // we can unwrap safely since there already is components registered.
        components.add_security_scheme(
            "api_key",
            SecurityScheme::ApiKey(utoipa::openapi::security::ApiKey::Cookie(ApiKeyValue::new(
                "session",
            ))),
        )
    }
}

pub async fn run(state: crate::app::App, addr: SocketAddr) -> Result<()> {
    let state = Data::new(state);

    let server = HttpServer::new(move || {
        let api_host = guard::Any(guard::Host("dawdle.space")).or(guard::Host("dawdle.localhost"));

        let (app, _api) = App::new()
            .into_utoipa_app()
            .openapi(ApiDoc::openapi())
            .map(|app| app.wrap(Logger::default()))
            .service(scope("/api").guard(api_host).configure(services::configure))
            .default_service(web::to(sites::handle))
            .app_data(state.clone())
            .split_for_parts();

        #[cfg(debug_assertions)]
        save_spec(
            &_api
                .to_json()
                .expect("Failed to serialize the OpenAPI spec"),
        );

        app
    });

    server.bind(addr)?.run().await?;
    Ok(())
}

#[cfg(debug_assertions)]
fn save_spec(spec: &str) {
    use std::path::Path;

    let path = Path::new("./web/src/api/spec.ts");
    if path.exists() {
        let spec = spec
            .replace(r#""servers":[],"#, "") // fets doesn't work with an empty servers array
            .replace("; charset=utf-8", "") // fets doesn't detect the json content type correctly
            .replace(r#""format":"int64","#, ""); // fets uses bigint for int64

        // check if the spec has changed
        let old_spec =
            std::fs::read_to_string(path).expect("Failed to read the existing OpenAPI spec");
        if old_spec == format!("export default {spec} as const;\n") {
            return;
        }

        log::info!("API has changed, updating the openapi spec...");
        std::fs::write(path, format!("export default {spec} as const;\n"))
            .expect("Failed to write the OpenAPI spec");
    }
}
