mod applications;
mod sessions;
mod sites;
mod users;

pub use applications::{AppApplications, Application};
pub use sessions::{AppSessions, Session};
use sites::AppSites;
use sqlx::{migrate, sqlite::SqlitePoolOptions};
pub use users::{AppUsers, User};

use eyre::Result;

use crate::config::Config;

#[derive(Clone)]
pub struct App {
    pub users: AppUsers,
    pub sites: AppSites,
    pub applications: AppApplications,
    pub sessions: AppSessions,
    pub config: Config,
}

impl App {
    pub async fn new(config: Config) -> Result<Self> {
        std::fs::create_dir_all(config.db_path().parent().unwrap())?;
        std::fs::create_dir_all(config.screenshots_path())?;

        let pool = SqlitePoolOptions::new()
            .connect(&config.db_path().to_string_lossy())
            .await?;

        migrate!("./migrations").run(&pool).await?;

        let users = AppUsers::new(pool.clone(), config.clone());
        let applications = AppApplications::new(pool.clone(), config.clone());
        let sessions = AppSessions::new(pool.clone());
        let sites = AppSites::new(pool.clone(), config.clone()).await?;

        Ok(Self {
            users,
            applications,
            sessions,
            config,
            sites,
            // chat: Arc::new(ChatState::new()),
        })
    }
}
