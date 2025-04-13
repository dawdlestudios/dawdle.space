use cuid2::cuid;
use eyre::{Result, bail};
use serde::{Deserialize, Serialize};
use sqlx::SqlitePool;
use utoipa::ToSchema;

use crate::utils::{hash_pw, is_valid_username};

#[derive(Clone)]
pub struct AppApplications {
    conn: SqlitePool,
    mail: crate::mail::Mail,
    _config: crate::config::Config,
}

#[derive(Debug, Clone, Serialize, Deserialize, ToSchema)]
pub struct Application {
    pub id: String,
    pub username: String,
    pub email: String,
    pub about: String,
    #[serde(with = "time::serde::rfc3339")]
    pub created_at: time::OffsetDateTime,
    pub approved: bool,
    pub claimed: bool,
    pub claim_token: Option<String>,
}

impl AppApplications {
    pub fn new(conn: SqlitePool, config: crate::config::Config, mail: crate::mail::Mail) -> Self {
        Self {
            conn,
            mail,
            _config: config,
        }
    }

    pub async fn all(&self) -> Result<Vec<Application>> {
        let applications = sqlx::query_as!(
            Application,
            r#"
            SELECT application_id AS id, requested_username AS username, email, about, approved, claimed, claim_token, created_at
            FROM applications
            "#,
        ).fetch_all(&self.conn).await?;
        Ok(applications)
    }

    pub async fn approve(&self, id: &str) -> Result<()> {
        let token = cuid();
        sqlx::query!(
            "UPDATE applications SET approved = 1, claim_token = ? WHERE application_id = ?",
            token,
            id,
        )
        .execute(&self.conn)
        .await?;

        let application = sqlx::query!(
            "SELECT requested_username, email FROM applications WHERE application_id = ?",
            id,
        )
        .fetch_one(&self.conn)
        .await?;

        self.mail
            .send(
                &application.email,
                "Your application has been approved",
                crate::mail::messages::application_confirmed(
                    &application.requested_username,
                    &token,
                ),
            )
            .await?;

        Ok(())
    }

    pub async fn unapprove(&self, id: &str) -> Result<()> {
        sqlx::query!(
            "UPDATE applications SET approved = 0 WHERE application_id = ? AND claimed = 0",
            id,
        )
        .execute(&self.conn)
        .await?;

        Ok(())
    }

    pub async fn update_username(&self, id: &str, username: &str) -> Result<()> {
        let username = username.to_lowercase();
        if !is_valid_username(&username) {
            bail!("invalid username");
        }

        sqlx::query!(
            "UPDATE applications SET requested_username = ? WHERE application_id = ? AND claimed = 0",
            username,
            id,
        )
        .execute(&self.conn)
        .await?;

        Ok(())
    }

    pub async fn delete(&self, id: &str) -> Result<()> {
        sqlx::query!("DELETE FROM applications WHERE application_id = ?", id,)
            .execute(&self.conn)
            .await?;
        Ok(())
    }

    pub async fn apply(&self, username: &str, email: &str, about: &str) -> Result<()> {
        let username = username.to_lowercase();
        if !is_valid_username(&username) {
            log::error!("invalid username: {}", username);
            bail!("invalid username");
        }

        let application_id = cuid();
        sqlx::query!(
            "INSERT INTO applications (application_id, requested_username, email, about) VALUES (?, ?, ?, ?)",
            application_id,
            username,
            email,
            about,
        )
        .execute(&self.conn)
        .await?;

        self.mail
            .send(
                email,
                "We've received your application",
                crate::mail::messages::application_received(&username),
            )
            .await?;

        Ok(())
    }

    pub async fn claim(&self, token: &str, username: &str, pw: &str) -> Result<()> {
        let username = username.to_lowercase();
        if !is_valid_username(&username) {
            bail!("invalid username");
        }

        let mut tx = self.conn.begin().await?;

        let application = sqlx::query!(
            "SELECT application_id, approved, claimed, requested_username FROM applications WHERE claim_token = ?",
            token,
        )
        .fetch_one(&mut *tx)
        .await?;

        if !application.approved {
            bail!("application not approved");
        }

        if application.claimed {
            bail!("application already claimed");
        }

        if application.requested_username != username {
            bail!("username does not match");
        }

        sqlx::query!(
            "UPDATE applications SET claimed = 1 WHERE application_id = ?",
            application.application_id,
        )
        .execute(&mut *tx)
        .await?;

        let password_hash = hash_pw(pw)?;
        sqlx::query!(
            "INSERT INTO users (username, password_hash) VALUES (?, ?)",
            username,
            password_hash,
        )
        .execute(&mut *tx)
        .await?;

        tx.commit().await?;
        Ok(())
    }
}
