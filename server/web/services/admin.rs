use super::errors::{ErrorResponse, ErrorResponseExt};
use super::{sessions, SuccessResponse};

use crate::app::{App, Application, User};

use actix_web::web::{Data, Json, Path};
use actix_web::{delete, get, post, HttpResponse, Responder};
use serde::{Deserialize, Serialize};
use utoipa::ToSchema;
use utoipa_actix_web::service_config::ServiceConfig;

const ADMIN: &str = "admin";

pub fn configure(config: &mut ServiceConfig) {
    config
        .service(is_admin)
        .service(get_applications)
        .service(approve_application)
        .service(unapprove_application)
        .service(delete_application)
        .service(update_application_username)
        .service(get_users)
        .service(delete_user);
}

#[utoipa::path(
    tag = ADMIN,
    responses(
        (status = 200, description = "requesting user is an admin", body = SuccessResponse),
        (status = 401, description = "requesting user isn't an admin")
    )
)]
#[post("/")]
pub async fn is_admin(_: sessions::Admin) -> Result<Json<SuccessResponse>, ErrorResponse> {
    Ok(Json(SuccessResponse { success: true }))
}

#[utoipa::path(
    tag = ADMIN,
    responses(
        (status = 200, description = "a list of applications", body = Vec<Application>),
    )
)]
#[get("/applications")]
pub async fn get_applications(
    _: sessions::Admin,
    app: Data<App>,
) -> Result<Json<Vec<Application>>, ErrorResponse> {
    let applications = app.applications.all().await.api_internal_error()?;
    Ok(Json(applications))
}

#[derive(Debug, Deserialize, ToSchema)]
pub struct UsernameRequest {
    username: String,
}

#[utoipa::path(
    tag = ADMIN,
    responses(
        (status = 200, body = SuccessResponse),
        (status = 500, description = "failed to approve application")
    )
)]
#[post("/application/{id}/approve")]
pub async fn approve_application(
    _: sessions::Admin,
    state: Data<App>,
    path: Path<(String,)>,
) -> Result<Json<SuccessResponse>, ErrorResponse> {
    state
        .applications
        .approve(&path.into_inner().0)
        .await
        .api_internal_error()?;

    Ok(Json(SuccessResponse { success: true }))
}

#[utoipa::path(
    tag = ADMIN,
    description = "unapprove a previously approved application",
    responses(
        (status = 200, body = SuccessResponse),
        (status = 500, description = "failed to unapprove application")
    )
)]
#[post("/application/{id}/unapprove")]
pub async fn unapprove_application(
    _: sessions::Admin,
    state: Data<App>,
    path: Path<(String,)>,
) -> Result<Json<SuccessResponse>, ErrorResponse> {
    state
        .applications
        .unapprove(&path.into_inner().0)
        .await
        .api_internal_error()?;
    Ok(Json(SuccessResponse { success: true }))
}

#[utoipa::path(
    tag = ADMIN,
    responses(
        (status = 200, body = SuccessResponse),
        (status = 500, description = "failed to update username")
    )
)]
#[post("/application/{id}/username")]
pub async fn update_application_username(
    _user: sessions::Admin,
    state: Data<App>,
    body: Json<UsernameRequest>,
    path: Path<(String,)>,
) -> Result<Json<SuccessResponse>, ErrorResponse> {
    state
        .applications
        .update_username(&path.into_inner().0, &body.username)
        .await
        .api_internal_error()?;

    Ok(Json(SuccessResponse { success: true }))
}

#[utoipa::path(
    tag = ADMIN,
    responses(
        (status = 200, body = SuccessResponse),
        (status = 500, description = "failed to delete application")
    )
)]
#[delete("/application/{id}")]
pub async fn delete_application(
    _user: sessions::Admin,
    state: Data<App>,
    path: Path<(String,)>,
) -> Result<Json<SuccessResponse>, ErrorResponse> {
    let id = path.into_inner().0;
    state.applications.delete(&id).await.api_internal_error()?;
    Ok(Json(SuccessResponse { success: true }))
}

#[utoipa::path(
    tag = ADMIN,
    responses(
        (status = 200, body = Vec<User>),
        (status = 500, description = "failed to get users")
    )
)]
#[get("/users")]
pub async fn get_users(
    _user: sessions::Admin,
    state: Data<App>,
) -> Result<Json<Vec<User>>, ErrorResponse> {
    let users = state.users.all().await.api_internal_error()?;
    Ok(Json(users))
}

#[utoipa::path(
    tag = ADMIN,
    responses(
        (status = 200, body = SuccessResponse),
        (status = 500, description = "failed to delete user")
    )
)]
#[delete("/user/{id}")]
pub async fn delete_user(
    _user: sessions::Admin,
    state: Data<App>,
    path: Path<(String,)>,
) -> Result<Json<SuccessResponse>, ErrorResponse> {
    let id = path.into_inner().0;
    state.users.delete(&id).await.api_internal_error()?;
    Ok(Json(SuccessResponse { success: true }))
}

#[derive(Debug, Serialize, ToSchema)]
pub struct AdminSiteResponse {
    id: String,
    owner: String,
    #[serde(rename = "createdAt")]
    created_at: time::OffsetDateTime,
    domain: String,
    #[serde(rename = "customDomain")]
    custom_domain: Option<String>,
}

#[utoipa::path(
    tag = ADMIN,
    responses(
        (status = 200, body = Vec<AdminSiteResponse>),
        (status = 500, description = "failed to get sites")
    )
)]
#[get("/sites")]
pub async fn get_sites(
    _user: sessions::Admin,
    state: Data<App>,
) -> Result<impl Responder, ErrorResponse> {
    let sites = state
        .sites
        .all()
        .into_iter()
        .map(|site| AdminSiteResponse {
            id: site.site_id,
            owner: site.owner,
            created_at: site.created_at,
            domain: site.domain,
            custom_domain: site.custom_domain,
        })
        .collect::<Vec<_>>();

    Ok(HttpResponse::Ok()
        .insert_header(("Cache-Control", "no-store"))
        .json(sites))
}
