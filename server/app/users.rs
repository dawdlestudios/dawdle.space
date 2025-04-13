use argon2::PasswordVerifier;
use eyre::{Result, eyre};
use serde::{Deserialize, Serialize};
use sqlx::SqlitePool;
use utoipa::ToSchema;

use crate::{
    minecraft,
    utils::{hash_pw, is_valid_username},
};

#[derive(Clone)]
pub struct AppUsers {
    conn: SqlitePool,
    config: crate::config::Config,
}

#[derive(Debug, Clone, Serialize, Deserialize, ToSchema)]
pub struct User {
    pub username: String,
    #[serde(with = "time::serde::rfc3339")]
    pub created_at: time::OffsetDateTime,
    pub role: Option<String>,

    pub minecraft_username: Option<String>,
    pub minecraft_uuid: Option<String>,

    pub email: Option<String>,
}

impl AppUsers {
    pub fn new(conn: SqlitePool, config: crate::config::Config) -> Self {
        Self { conn, config }
    }

    pub async fn all_usernames(&self) -> Result<Vec<String>> {
        let rows = sqlx::query!("SELECT username FROM users")
            .map(|row| row.username)
            .fetch_all(&self.conn)
            .await?;

        Ok(rows)
    }

    pub async fn all(&self) -> Result<Vec<User>> {
        let users = sqlx::query_as!(
            User,
            "SELECT username, created_at, role, minecraft_username, minecraft_uuid, email FROM users",
        )
        .fetch_all(&self.conn)
        .await?;

        Ok(users)
    }

    pub async fn verify_password(&self, username: &str, password: &str) -> Result<bool> {
        let password_hash = sqlx::query!(
            "SELECT password_hash FROM users WHERE username = ?",
            username
        )
        .map(|row| row.password_hash)
        .fetch_one(&self.conn)
        .await?;

        let password_hash = argon2::PasswordHash::new(&password_hash)?;

        let hasher = argon2::Argon2::default();
        match hasher.verify_password(password.as_bytes(), &password_hash) {
            Ok(_) => Ok(true),
            Err(argon2::password_hash::Error::Password) => Ok(false),
            Err(err) => Err(err.into()),
        }
    }

    pub async fn create(&self, username: &str, password: &str, role: Option<&str>) -> Result<()> {
        let username = username.to_lowercase();
        if !is_valid_username(&username) {
            return Err(eyre!("invalid username"));
        }

        let password_hash = hash_pw(password)?;

        sqlx::query!(
            "INSERT INTO users (username, password_hash, role) VALUES (?, ?, ?)",
            username,
            password_hash,
            role
        )
        .execute(&self.conn)
        .await?;

        Ok(())
    }

    pub async fn delete(&self, username: &str) -> Result<()> {
        sqlx::query!("DELETE FROM users WHERE username = ?", username)
            .execute(&self.conn)
            .await?;

        Ok(())
    }

    pub async fn get(&self, username: &str) -> Result<Option<User>> {
        let user = sqlx::query_as!(
            User,
            "SELECT username, created_at, role, minecraft_username, minecraft_uuid, email FROM users WHERE username = ?",
            username
        )
        .fetch_optional(&self.conn)
        .await?;

        Ok(user)
    }

    pub async fn update_password(&self, username: &str, password: &str) -> Result<()> {
        let password_hash = hash_pw(password)?;

        sqlx::query!(
            "UPDATE users SET password_hash = ? WHERE username = ?",
            password_hash,
            username
        )
        .execute(&self.conn)
        .await?;

        Ok(())
    }

    pub async fn update_minecraft_username(
        &self,
        username: &str,
        new_minecraft_username: &str,
    ) -> Result<()> {
        let mut tx = self.conn.begin().await?;

        // Fetch user
        let user = sqlx::query!(
            r#"SELECT minecraft_uuid, minecraft_username
               FROM users
               WHERE username = ?"#,
            username
        )
        .fetch_optional(&mut *tx)
        .await?
        .ok_or_else(|| eyre!("user not found"))?;

        if new_minecraft_username.replace('-', "").len() == 32 {
            return Err(eyre!("minecraft username cannot be an UUID"));
        }

        let new_minecraft_user =
            minecraft::whitelist_add(new_minecraft_username, &self.config.minecraft).await?;

        let existing_user = sqlx::query!(
            "SELECT username FROM users WHERE minecraft_uuid = ?",
            new_minecraft_user.id
        )
        .fetch_optional(&mut *tx)
        .await?;

        if let Some(rec) = existing_user {
            if rec.username != username {
                return Err(eyre!("minecraft user already registered"));
            }
        }

        // Remove old if different
        if let Some(old_uuid) = user.minecraft_uuid {
            if old_uuid != new_minecraft_user.id {
                minecraft::whitelist_remove(&old_uuid, &self.config.minecraft).await?;
            }
        }

        sqlx::query!(
            r#"UPDATE users
               SET minecraft_username = ?, minecraft_uuid = ?
               WHERE username = ?"#,
            new_minecraft_user.name,
            new_minecraft_user.id,
            username
        )
        .execute(&mut *tx)
        .await?;

        tx.commit().await?;
        Ok(())
    }
}
