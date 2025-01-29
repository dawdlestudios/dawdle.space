use crate::{
    app::App,
    web::{
        errors::{ErrorResponse, ErrorResponseExt},
        sessions::RequiredSession,
    },
};
use actix_web::{
    get, post,
    web::{Data, Json},
    Responder,
};
use serde::{Deserialize, Serialize};
use utoipa::ToSchema;
use utoipa_actix_web::service_config::ServiceConfig;

use super::SuccessResponse;

const ME: &str = "me";

pub fn configure(config: &mut ServiceConfig) {
    config
        .service(get_me)
        .service(change_password)
        .service(update_minecraft_username);
}

#[derive(Debug, Deserialize, Serialize, ToSchema)]
struct MeResponse {
    username: String,
    minecraft_username: Option<String>,
}

#[utoipa::path(
    tag = ME,
    responses(
        (status = 200, description = "information about the requesting user", body = MeResponse),
    )
)]
#[get("/")]
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

#[derive(Debug, Deserialize, ToSchema)]
pub struct ChangePasswordRequest {
    pub old_password: String,
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
