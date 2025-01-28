use crate::{
    app::App,
    utils::valid_public_key,
    web::{
        errors::{ErrorResponse, ErrorResponseExt},
        sessions::RequiredSession,
    },
};
use actix_web::{
    Responder, get,
    http::StatusCode,
    post,
    web::{Data, Json},
};
use serde::{Deserialize, Serialize};
use utoipa::ToSchema;
use utoipa_actix_web::service_config::ServiceConfig;

use super::SuccessResponse;

const ME: &str = "me";

pub fn configure(config: &mut ServiceConfig) {
    config
        .service(get_me)
        .service(add_public_key)
        .service(remove_public_key)
        .service(change_password)
        .service(update_minecraft_username);
}

#[derive(Debug, Deserialize, Serialize, ToSchema)]
struct MeResponse {
    username: String,
    minecraft_username: Option<String>,
    public_keys: Vec<(String, String)>,
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
    let keys = app
        .users
        .get_public_keys(session.username())
        .await
        .api_internal_error()?;

    let user = app
        .users
        .get(session.username())
        .await
        .api_internal_error()?
        .api_not_found()?;

    Ok(Json(MeResponse {
        username: session.username().to_string(),
        public_keys: keys,
        minecraft_username: user.minecraft_username,
    }))
}

#[derive(Debug, Deserialize, Serialize, ToSchema)]
pub struct AddPublicKeyRequest {
    name: String,
    key: String,
}

#[utoipa::path(
    tag = ME,
    responses(
        (status = 200, description = "public key added successfully", body = SuccessResponse),
        (status = 400, description = "invalid public key"),
    )
)]
#[post("/public-key")]
pub async fn add_public_key(
    session: RequiredSession,
    app: Data<App>,
    body: Json<AddPublicKeyRequest>,
) -> Result<impl Responder, ErrorResponse> {
    let AddPublicKeyRequest { name, key } = body.0;

    if !valid_public_key(&key) {
        return Err(ErrorResponse::new(
            StatusCode::BAD_REQUEST,
            "invalid public key",
        ));
    }

    app.users
        .add_public_key(session.username(), &key, &name)
        .await
        .api_internal_error()?;

    Ok(Json(SuccessResponse::default()))
}

#[derive(Debug, Deserialize, Serialize, ToSchema)]
pub struct RemovePublicKeyRequest {
    name: String,
}

#[utoipa::path(
    tag = ME,
    responses(
        (status = 200, description = "public key removed successfully", body = SuccessResponse),
        (status = 400, description = "key name does not exist"),
    )
)]
#[post("/public-key/remove")]
pub async fn remove_public_key(
    session: RequiredSession,
    app: Data<App>,
    body: Json<RemovePublicKeyRequest>,
) -> Result<impl Responder, ErrorResponse> {
    let RemovePublicKeyRequest { name } = body.0;
    app.users
        .remove_public_key(session.username(), &name)
        .await
        .map_err(|_| ErrorResponse::new(StatusCode::BAD_REQUEST, "key name does not exist"))?;

    Ok(Json(SuccessResponse::default()))
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
