mod applications;
mod sessions;
mod users;

pub use applications::{AppApplications, Application};
pub use sessions::{AppSessions, Session};
use sqlx::{migrate, sqlite::SqlitePoolOptions};
pub use users::{AppUsers, User};

use std::sync::Arc;

use dashmap::DashMap;
use eyre::Result;
use serde::{Deserialize, Serialize};

use crate::config::Config;

#[derive(Clone)]
pub struct App {
    pub users: AppUsers,
    pub applications: AppApplications,
    pub sessions: AppSessions,
    // pub chat: Arc<crate::chat::state::ChatState>,
    pub config: Config,
    pub sites: Arc<DashMap<String, Website>>,
}

type Username = String;
type RelativeProjectPath = String;

#[derive(Debug, Clone, Serialize, Deserialize)]
pub enum Website {
    User(Username), // always at ~/public
    Site(Username, RelativeProjectPath),
}

impl App {
    pub async fn new(config: Config) -> Result<Self> {
        std::fs::create_dir_all(config.db_path().parent().unwrap())?;

        let pool = SqlitePoolOptions::new()
            .connect(&config.db_path().to_string_lossy())
            .await?;

        migrate!("src/migrations").run(&pool).await?;

        let users = AppUsers::new(pool.clone(), config.clone());
        let applications = AppApplications::new(pool.clone(), config.clone());
        let sessions = AppSessions::new(pool.clone());

        let sites = {
            DashMap::from_iter(
                users
                    .all_usernames()
                    .await?
                    .into_iter()
                    .map(|username| (username.clone(), Website::User(username))),
            )
        };

        sites.insert(
            "lastfm-iceberg".to_string(),
            Website::Site("henry".to_string(), "sites/lastfm-iceberg".to_string()),
        );

        Ok(Self {
            users,
            applications,
            sessions,
            config,
            sites: Arc::new(sites),
            // chat: Arc::new(ChatState::new()),
        })
    }

    // only needs to be called manually if e.g. a new user is added or a site is created
    // otherwise, it will be called automatically when the server starts
    pub fn set_site(&self, subdomain: String, website: Website) {
        self.sites.insert(subdomain, website);
    }
}
