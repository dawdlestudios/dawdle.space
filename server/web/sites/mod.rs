use std::path::{Path, PathBuf};

use super::errors::ErrorResponseExt;
use crate::{App, web::errors::ErrorResponse};
use actix_files::NamedFile;
use actix_web::{Either, HttpRequest, HttpResponse, web::Data};

pub async fn handle(
    req: HttpRequest,
    app: Data<App>,
) -> Result<Either<HttpResponse, NamedFile>, ErrorResponse> {
    let hostname = req.connection_info().host().to_string();
    let path = req.path();

    let (hostname, port) = if let Some(colon) = hostname.find(':') {
        let (hostname, port) = hostname.split_at(colon);
        (hostname.to_string(), &port[1..])
    } else {
        (hostname, "80")
    };

    #[cfg(debug_assertions)]
    let hostname = hostname.strip_suffix(".localhost").unwrap_or(&hostname);

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

    let Some((path_str, path)) = sanitize_and_check_path(&dir, path) else {
        return Err(ErrorResponse::not_found("invalid path"));
    };

    if path_str != "/" && path_str.ends_with('/') {
        return Ok(Either::Left(
            HttpResponse::MovedPermanently()
                .insert_header(("Location", path_str.strip_suffix('/').unwrap()))
                .finish(),
        ));
    }

    if tokio::fs::metadata(&path)
        .await
        .map(|m| m.is_file())
        .unwrap_or(false)
    {
        let file = NamedFile::open(path).api_not_found()?;
        return Ok(Either::Right(file));
    }

    let Some(selected_file) = find_index(&dir, &path).await else {
        let file = NamedFile::open(dir.join("404.html")).api_not_found()?;
        return Ok(Either::Right(file));
    };

    if selected_file
        .extension()
        .map(|e| e == "md")
        .unwrap_or(false)
    {
        return Err(ErrorResponse::internal_error("not implemented"));
    }

    Ok(Either::Right(
        NamedFile::open(selected_file).api_not_found()?,
    ))
}

fn sanitize_and_check_path(base: &Path, input: &str) -> Option<(String, PathBuf)> {
    let sanitized: PathBuf = input
        .split('/')
        .filter(|segment| !segment.is_empty() && *segment != ".." && *segment != "~")
        .collect::<PathBuf>();

    let full_path = base.join(&sanitized);

    if full_path.starts_with(base) {
        sanitized.to_str().map(|s| (s.to_string(), full_path))
    } else {
        None // Path is outside allowed directory
    }
}

async fn find_index(base: &Path, path: &Path) -> Option<PathBuf> {
    const INDEXES: [&str; 3] = ["index.html", "index.htm", "index.md"];
    const EXTENSIONS: [&str; 3] = ["html", "htm", "md"];

    let mut path = base.join(path);
    for (index, extension) in INDEXES.iter().zip(EXTENSIONS.iter()) {
        path.push(index);
        if tokio::fs::metadata(&path)
            .await
            .map(|m| m.is_file())
            .unwrap_or(false)
        {
            return Some(path);
        }

        path.pop();
        path.set_extension(extension);
        if tokio::fs::metadata(&path)
            .await
            .map(|m| m.is_file())
            .unwrap_or(false)
        {
            return Some(path);
        }

        path.pop();
    }

    None
}
