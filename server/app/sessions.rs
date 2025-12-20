use cuid2::cuid;
use eyre::Result;
use sqlx::SqlitePool;

#[derive(Clone)]
pub struct AppSessions {
    conn: SqlitePool,
}

#[derive(Debug, Clone, serde::Serialize, serde::Deserialize)]
pub struct Session {
    pub username: String,
    #[serde(with = "time::serde::rfc3339")]
    pub created_at: time::OffsetDateTime,
    #[serde(with = "time::serde::rfc3339")]
    pub last_active: time::OffsetDateTime,
    pub logged_out: bool,
}

impl AppSessions {
    pub fn new(conn: SqlitePool) -> Self {
        Self { conn }
    }

    pub async fn create(&self, username: &str) -> Result<String> {
        let session_token = cuid();

        sqlx::query!(
            "INSERT INTO sessions (session_token, username) VALUES (?, ?)",
            session_token,
            username,
        )
        .execute(&self.conn)
        .await?;

        Ok(session_token)
    }

    pub async fn logout(&self, session_token: &str) -> Result<()> {
        sqlx::query!(
            "UPDATE sessions SET logged_out = 1 WHERE session_token = ?",
            session_token,
        )
        .execute(&self.conn)
        .await?;
        Ok(())
    }

    pub async fn verify(&self, session_token: &str) -> Result<Option<Session>> {
        let session = sqlx::query_as!(
            Session,
            r#"
            SELECT
                username,
                created_at,
                last_active,
                logged_out
            FROM sessions WHERE session_token = ?
            "#,
            session_token,
        )
        .fetch_optional(&self.conn)
        .await?;

        let session = match session {
            Some(session) => session,
            None => return Ok(None),
        };

        if session.logged_out {
            return Ok(None);
        }

        const SESSION_TIMEOUT: i64 = 60 * 60 * 24 * 7; // 7 days
        let now = time::OffsetDateTime::now_utc();
        let last_active = session.last_active;
        if now.unix_timestamp() - last_active.unix_timestamp() > SESSION_TIMEOUT {
            return Ok(None);
        }

        sqlx::query!(
            "UPDATE sessions SET last_active = ? WHERE session_token = ?",
            now,
            session_token,
        )
        .execute(&self.conn)
        .await?;

        Ok(Some(session))
    }
}
