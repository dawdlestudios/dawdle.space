use std::{sync::Arc, time::Duration};

use dashmap::DashMap;
use eyre::{OptionExt, Result, bail};
use sqlx::{SqlitePool, prelude::FromRow};
use time::OffsetDateTime;

use crate::screenshot::{ScreenshotSite, screenshot};

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

    pub hidden: bool,   // if true, the site will not be shown in the list of sites
    pub disabled: bool, // if true, the site will not be accessible to the public
}

#[derive(Clone)]
pub struct AppSites {
    conn: SqlitePool,
    config: crate::config::Config,

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

        let sites = Self {
            conn,
            config,
            domain_to_site_id,
            sites,
        };

        let sites2 = sites.clone();
        tokio::spawn(async move {
            if let Err(e) = sites2.screenshot_all().await {
                log::error!("failed to take screenshots: {e}");
            }
        });

        Ok(sites)
    }

    pub fn all(&self) -> Vec<Site> {
        self.sites.iter().map(|s| s.value().clone()).collect()
    }

    pub async fn screenshot_cron(&self, interval: Duration) {
        let mut interval = tokio::time::interval(interval);
        loop {
            interval.tick().await;
            if let Err(e) = self.screenshot_all().await {
                log::error!("failed to take screenshots: {e}");
            }
        }
    }

    pub async fn screenshot_all(&self) -> Result<()> {
        let all: Vec<ScreenshotSite> = self
            .sites
            .iter()
            .filter_map(|s| {
                Some(ScreenshotSite {
                    url: format!("https://{}", s.value().domain),
                    dest: self.config.site_screenshot(s.key()).ok()?,
                })
            })
            .collect();

        screenshot(all).await?;
        Ok(())
    }

    pub async fn screenshot(&self, site_id: &str) -> Result<()> {
        let site = self.get(site_id).ok_or_eyre("no site")?;
        let site = ScreenshotSite {
            url: format!("https://{}", site.domain),
            dest: self.config.site_screenshot(&site.site_id)?,
        };
        screenshot(vec![site]).await?;
        Ok(())
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

    pub async fn create(&self, domain: &str, owner: &str, hidden: bool) -> Result<Site> {
        let site_id = cuid2::slug();
        let access_token = cuid2::cuid();

        if !domain
            .strip_suffix(".dawdle.space")
            .map(|d| {
                d.chars().all(|c| c.is_ascii_alphanumeric() || c == '-')
                    && d.len() > 3
                    && d.len() < 63
            })
            .unwrap_or(false)
        {
            bail!("invalid domain");
        };

        let site = Site {
            site_id: site_id.clone(),
            domain: domain.to_string(),
            owner: owner.to_string(),
            created_at: OffsetDateTime::now_utc(),
            custom_domain: None,
            redirect_to_custom_domain: false,
            access_token: Some(access_token.clone()),
            disabled: false,
            hidden,
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

        let dir = self.config.site_dir(&site_id)?;
        tokio::fs::create_dir_all(&dir).await?;
        tokio::fs::write(dir.join("index.html"), DEFAULT_HTML).await?;

        let self2 = self.clone();
        tokio::spawn(async move {
            if let Err(e) = self2.screenshot(&site_id).await {
                log::error!("failed to take screenshot: {e}");
            }
        });

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
