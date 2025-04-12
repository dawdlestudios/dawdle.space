use crate::App;
use crate::web::{
    errors::{ErrorResponse, ErrorResponseExt},
    sessions::RequiredSession,
};

use actix_web::web::{Data, Json};
use actix_web::{HttpResponse, Responder, delete, get, post};
use serde::{Deserialize, Serialize};
use utoipa::ToSchema;
use utoipa_actix_web::service_config::ServiceConfig;

use super::SuccessResponse;

const ME: &str = "me";

pub fn configure(config: &mut ServiceConfig) {
    config
        .service(get_me)
        .service(change_password)
        .service(update_minecraft_username)
        .service(sites)
        .service(create_site)
        .service(get_site_token)
        .service(reset_site_token);
}

#[derive(Debug, Deserialize, Serialize, ToSchema)]
struct MeResponse {
    username: String,
    #[serde(rename = "minecraftUsername")]
    minecraft_username: Option<String>,
}

#[utoipa::path(
    tag = ME,
    responses(
        (status = 200, description = "information about the requesting user", body = MeResponse),
    )
)]
#[get("")]
pub async fn get_me(
    session: RequiredSession,
    app: Data<App>,
) -> Result<Json<MeResponse>, ErrorResponse> {
    let user = app
        .users
        .get(session.username())
        .await
        .api_internal_error()?
        .api_not_found()?;

    Ok(Json(MeResponse {
        username: session.username().to_string(),
        minecraft_username: user.minecraft_username,
    }))
}

#[derive(Debug, Serialize, ToSchema)]
struct SiteResponse {
    id: String,
    domain: String,
    #[serde(rename = "customDomain")]
    custom_domain: Option<String>,

    hidden: bool,
    disabled: bool,
}

#[utoipa::path(
    tag = ME,
    responses(
        (status = 200, description = "information about the requesting user's sites", body = Vec<SiteResponse>),
    )
)]
#[get("/sites")]
pub async fn sites(
    session: RequiredSession,
    app: Data<App>,
) -> Result<HttpResponse, ErrorResponse> {
    let sites = app
        .sites
        .by_username(session.username())
        .into_iter()
        .map(|site| SiteResponse {
            id: site.site_id,
            domain: site.domain,
            custom_domain: site.custom_domain,
            hidden: site.hidden,
            disabled: site.disabled,
        })
        .collect::<Vec<_>>();

    //    since this is an authenticated endpoint, we need to add a header to not cache the response
    Ok(HttpResponse::Ok()
        .insert_header(("Cache-Control", "no-store"))
        .json(sites))
}

#[derive(Debug, Serialize, ToSchema)]
pub struct SiteTokenResponse {
    pub token: String,
}

// token can be read or reset, with `get` and `delete` methods respectively
#[utoipa::path(
    tag = ME,
    responses(
        (status = 200, description = "token retrieved successfully", body = SiteTokenResponse),
        (status = 204, description = "token reset successfully"),
    )
)]
#[get("/sites/{site_id}/token")]
pub async fn get_site_token(
    session: RequiredSession,
    app: Data<App>,
    site_id: String,
) -> Result<HttpResponse, ErrorResponse> {
    let site = app.sites.get(&site_id).api_not_found()?;
    if site.owner != session.username() {
        return Err(ErrorResponse::forbidden("you do not own this site"));
    }

    Ok(HttpResponse::Ok()
        .insert_header(("Cache-Control", "no-store"))
        .json(SiteTokenResponse {
            token: site.access_token.unwrap_or_default(),
        }))
}

#[utoipa::path(
    tag = ME,
    responses(
        (status = 204, description = "token reset successfully", body = SiteTokenResponse),
    )
)]
#[delete("/sites/{site_id}/token")]
pub async fn reset_site_token(
    session: RequiredSession,
    app: Data<App>,
    site_id: String,
) -> Result<Json<SiteTokenResponse>, ErrorResponse> {
    if !app.sites.is_owner(&site_id, session.username()) {
        return Err(ErrorResponse::forbidden("you do not own this site"));
    }

    let new_token = app.sites.reset_token(&site_id).await.api_internal_error()?;
    Ok(Json(SiteTokenResponse { token: new_token }))
}

#[derive(Debug, Serialize, Deserialize, ToSchema)]
pub struct CreateSiteRequest {
    name: String,
    hidden: bool,
}

#[utoipa::path(
    tag = ME,
    responses(
        (status = 201, description = "site created successfully", body = SiteResponse),
    )
)]
#[post("/site")]
pub async fn create_site(
    session: RequiredSession,
    app: Data<App>,
    body: Json<CreateSiteRequest>,
) -> Result<Json<SiteResponse>, ErrorResponse> {
    if app.sites.resolve_hostname(&body.name).is_some() {
        return Err(ErrorResponse::bad_request(
            "site or user with this name already exists",
        ));
    }

    let site = app
        .sites
        .create(&body.name, session.username(), body.hidden)
        .await
        .api_internal_error()?;

    Ok(Json(SiteResponse {
        id: site.site_id,
        domain: site.domain,
        custom_domain: site.custom_domain,
        hidden: site.hidden,
        disabled: site.disabled,
    }))
}

#[derive(Debug, Deserialize, ToSchema)]
pub struct ChangePasswordRequest {
    #[serde(rename = "oldPassword")]
    pub old_password: String,
    #[serde(rename = "newPassword")]
    pub new_password: String,
}

#[utoipa::path(
    tag = ME,
    responses(
        (status = 200, description = "password changed successfully", body = SuccessResponse),
        (status = 400, description = "incorrect old password"),
    )
)]
#[post("/password")]
pub async fn change_password(
    session: RequiredSession,
    app: Data<App>,
    body: Json<ChangePasswordRequest>,
) -> Result<impl Responder, ErrorResponse> {
    let password = body.0;

    app.users
        .verify_password(session.username(), &password.old_password)
        .await
        .api_internal_error()?;

    app.users
        .update_password(session.username(), &password.new_password)
        .await
        .api_internal_error()?;

    Ok(Json(SuccessResponse::default()))
}

#[derive(Debug, Deserialize, ToSchema)]
pub struct UpdateMinecraftUsernameRequest {
    pub username: String,
}

#[utoipa::path(
    tag = ME,
    responses(
        (status = 200, description = "minecraft username updated successfully", body = SuccessResponse),
    )
)]
#[post("/game/minecraft/username")]
pub async fn update_minecraft_username(
    session: RequiredSession,
    app: Data<App>,
    body: Json<UpdateMinecraftUsernameRequest>,
) -> Result<impl Responder, ErrorResponse> {
    let username = body.0.username;

    app.users
        .update_minecraft_username(session.username(), &username)
        .await
        .api_internal_error()?;

    Ok(Json(SuccessResponse::default()))
}
