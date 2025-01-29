use super::errors::ErrorResponseExt;
use crate::{web::errors::ErrorResponse, App};
use actix_files::NamedFile;
use actix_web::{web::Data, HttpRequest, Responder};

pub async fn handle(req: HttpRequest, app: Data<App>) -> Result<impl Responder, ErrorResponse> {
    let info = req.connection_info();
    let hostname = info.host();

    let (hostname, port) = if let Some(colon) = hostname.find(':') {
        let (hostname, port) = hostname.split_at(colon);
        (hostname, &port[1..])
    } else {
        (hostname, "80")
    };

    #[cfg(debug_assertions)]
    let hostname = hostname.strip_suffix(".localhost").unwrap_or(hostname);

    let Ok(domain) = addr::parse_domain_name(hostname) else {
        return Err(ErrorResponse::bad_request("invalid hostname"));
    };

    if !cfg!(debug_assertions) && port != "80" {
        return Err(ErrorResponse::bad_request("invalid port"));
    }

    let Some(site) = app.sites.resolve_hostname(domain.as_str()) else {
        return Err(ErrorResponse::not_found("site not found"));
    };

    let dir = app
        .config
        .site_dir(&site.site_id)
        .expect("site id has to be valid");

    let file = NamedFile::open(dir.join("index.html")).api_not_found()?;
    Ok(file)
}
