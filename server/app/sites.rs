use std::sync::Arc;

use dashmap::DashMap;
use eyre::{bail, Result};
use sqlx::{prelude::FromRow, SqlitePool};
use time::OffsetDateTime;

static DEFAULT_HTML: &str = include_str!("../static/default.html");

#[derive(Clone, FromRow)]
pub struct Site {
    pub site_id: String,
    pub domain: String,
    pub owner: String,
    pub created_at: OffsetDateTime,
    pub custom_domain: Option<String>,
    pub redirect_to_custom_domain: bool,

    // token required to update the site via sftp/webdav/etc.
    // this is generated when the site is created, and can be reset by the owner.
    pub access_token: Option<String>,
}

#[derive(Clone)]
pub struct AppSites {
    conn: SqlitePool,
    _config: crate::config::Config,

    domain_to_site_id: Arc<DashMap<String, String>>,
    sites: Arc<DashMap<String, Site>>,
}

impl AppSites {
    pub async fn new(conn: SqlitePool, config: crate::config::Config) -> Result<Self> {
        let sites = sqlx::query_as!(Site, "SELECT * FROM sites")
            .fetch_all(&conn)
            .await?;

        let domain_to_site_id = Arc::new(DashMap::from_iter(
            sites
                .iter()
                .map(|site| (site.domain.clone(), site.site_id.clone()))
                .chain(sites.iter().filter_map(|site| {
                    site.custom_domain
                        .as_ref()
                        .map(|d| (d.clone(), site.site_id.clone()))
                })),
        ));

        let sites = Arc::new(DashMap::from_iter(
            sites.into_iter().map(|site| (site.site_id.clone(), site)),
        ));

        Ok(Self {
            conn,
            _config: config,
            domain_to_site_id,
            sites,
        })
    }

    pub fn all(&self) -> Vec<Site> {
        self.sites.iter().map(|s| s.value().clone()).collect()
    }

    pub fn get(&self, site_id: &str) -> Option<Site> {
        self.sites.get(site_id).map(|s| s.value().clone())
    }

    pub fn by_username(&self, username: &str) -> Vec<Site> {
        self.sites
            .iter()
            .filter(|s| s.value().owner == username)
            .map(|s| s.value().clone())
            .collect()
    }

    pub fn is_owner(&self, site_id: &str, user: &str) -> bool {
        self.sites
            .get(site_id)
            .map(|site| site.owner == user)
            .unwrap_or(false)
    }

    pub fn validate_token(&self, site_id: &str, secret: &str) -> bool {
        self.sites
            .get(site_id)
            .map(|site| match &site.access_token {
                Some(token) => token == secret && !secret.is_empty(),
                None => false,
            })
            .unwrap_or(false)
    }

    pub fn resolve_hostname(&self, host: &str) -> Option<Site> {
        let site_id = self.domain_to_site_id.get(host).map(|s| s.value().clone());
        site_id.and_then(|site_id| self.sites.get(&site_id).map(|s| s.value().clone()))
    }

    pub async fn create(&self, domain: &str, owner: &str) -> Result<Site> {
        let site_id = cuid2::slug();
        let access_token = cuid2::cuid();

        let site = Site {
            site_id: site_id.clone(),
            domain: domain.to_string(),
            owner: owner.to_string(),
            created_at: OffsetDateTime::now_utc(),
            custom_domain: None,
            redirect_to_custom_domain: false,
            access_token: Some(access_token.clone()),
        };

        if self.domain_to_site_id.contains_key(domain) {
            bail!("domain already in use");
        };

        sqlx::query!(
            "INSERT INTO sites (site_id, domain, owner, created_at, access_token) VALUES (?, ?, ?, ?, ?)",
            site_id,
            domain,
            owner,
            site.created_at,
            access_token,
        )
        .execute(&self.conn)
        .await?;

        self.domain_to_site_id
            .insert(domain.to_string(), site_id.clone());
        self.sites.insert(site_id.clone(), site.clone());

        let dir = self._config.site_dir(&site_id)?;
        tokio::fs::create_dir_all(&dir).await?;
        tokio::fs::write(dir.join("index.html"), DEFAULT_HTML).await?;

        Ok(site)
    }

    pub async fn set_custom_domain(&self, site_id: &str, domain: &str) -> Result<()> {
        sqlx::query!(
            "UPDATE sites SET custom_domain = ? WHERE site_id = ?",
            domain,
            site_id,
        )
        .execute(&self.conn)
        .await?;

        if let Some(mut site) = self.sites.get_mut(site_id) {
            site.custom_domain = Some(domain.to_string());
        }

        self.domain_to_site_id
            .insert(domain.to_string(), site_id.to_string());

        Ok(())
    }

    pub async fn reset_token(&self, site_id: &str) -> Result<String> {
        let access_token = cuid2::cuid();

        sqlx::query!(
            "UPDATE sites SET access_token = ? WHERE site_id = ?",
            access_token,
            site_id,
        )
        .execute(&self.conn)
        .await?;

        if let Some(mut site) = self.sites.get_mut(site_id) {
            site.access_token = Some(access_token.clone());
        }

        Ok(access_token)
    }

    pub async fn delete(&self, site_id: &str) -> Result<()> {
        sqlx::query!("DELETE FROM sites WHERE site_id = ?", site_id,)
            .execute(&self.conn)
            .await?;

        let Some((_, site)) = self.sites.remove(site_id) else {
            return Ok(());
        };

        if let Some(custom_domain) = site.custom_domain {
            self.domain_to_site_id.remove(&custom_domain);
        }

        self.domain_to_site_id.remove(&site.domain);
        Ok(())
    }
}
