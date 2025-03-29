use eyre::Result;
use serde::{Deserialize, Serialize};

#[derive(Clone, Debug, Serialize, Deserialize)]
pub struct Config {
    pub fs: FileSystemConfig,
    pub ssh: SSHConfig,
    pub web: WebConfig,
    pub minecraft: MinecraftConfig,
    pub create_admin_user: Option<(String, String)>,
}

#[derive(Clone, Debug, Serialize, Deserialize)]
pub struct FileSystemConfig {
    /// The directory for all database files, ssh keys, etc
    pub data_dir: String,

    /// The directory for all user files
    pub site_dir: String,
}

#[derive(Clone, Debug, Serialize, Deserialize)]
pub struct SSHConfig {
    pub port: u16,
    pub interface: String,
}

#[derive(Clone, Debug, Serialize, Deserialize)]
pub struct WebConfig {
    pub port: u16,
    pub interface: String,
}

#[derive(Clone, Debug, Serialize, Deserialize)]
pub struct MinecraftConfig {
    pub restadmin_url: String,
    pub restadmin_token: String,
}

impl Config {
    pub fn load() -> eyre::Result<Self> {
        let config_path = std::env::var("DAWDLE_CONFIG").unwrap_or_else(|_| {
            // check if the config file exists in the current directory
            // otherwise, check if ~/.config/dawdle.config.toml exists
            let cwd = std::env::current_dir().expect("failed to get current dir");
            let cwd_config = cwd.join("dawdle.config.toml");
            if cwd_config.exists() {
                return cwd_config.to_str().unwrap().to_string();
            }

            let home = std::env::var("HOME").expect("HOME env var not set");
            let home = std::path::Path::new(&home);
            let home_config = home.join(".config").join("dawdle.config.toml");
            if home_config.exists() {
                return home_config.to_str().unwrap().to_string();
            }

            panic!("config file not found");
        });

        let config = std::fs::read_to_string(config_path.clone())?;
        let config: Config = toml::from_str(&config)?;

        log::info!("loaded config from {}", config_path);
        Ok(config)
    }

    pub fn db_path(&self) -> std::path::PathBuf {
        resolve_path(&self.fs.data_dir).join("db.sqlite")
    }

    pub fn screenshots_path(&self) -> std::path::PathBuf {
        resolve_path(&self.fs.data_dir).join("screenshots")
    }

    pub fn site_screenshot(&self, site_id: &str) -> Result<std::path::PathBuf> {
        if !cuid2::is_slug(site_id) {
            return Err(eyre::eyre!("invalid site id"));
        }
        Ok(self.screenshots_path().join(format!("{site_id}.avif")))
    }

    pub fn site_dir(&self, site_id: &str) -> Result<std::path::PathBuf> {
        if !cuid2::is_slug(site_id) {
            return Err(eyre::eyre!("invalid site id"));
        }

        Ok(resolve_path(&self.fs.site_dir).join(site_id))
    }

    pub fn ssh_key_path(&self) -> std::path::PathBuf {
        resolve_path(&self.fs.data_dir)
            .join("ssh")
            .join("id_ed25519")
    }
}

// takes either an absolute path or a path relative to the current directory
// returns an absolute path (PathBuf)
fn resolve_path(path: &str) -> std::path::PathBuf {
    let path = std::path::Path::new(path);
    if path.is_absolute() {
        return path.to_path_buf();
    }

    std::env::current_dir()
        .expect("failed to get current dir")
        .join(path)
}
