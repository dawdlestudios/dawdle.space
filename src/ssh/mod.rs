mod session;
mod sftp;

use std::{net::SocketAddr, sync::Arc, time::Duration};

use crate::containers::Containers;
use eyre::{Ok, Result};
use russh::server::Server;
use session::SshSession;
use ssh_key::PrivateKey;

#[derive(Clone)]
pub struct SshServer {
    state: crate::app::App,
    containers: Containers,
}

impl SshServer {
    pub async fn run(mut self, addr: SocketAddr) -> Result<()> {
        let key = self.get_key()?;
        let config = russh::server::Config {
            auth_rejection_time: Duration::from_secs(1),
            auth_rejection_time_initial: Some(Duration::from_secs(0)),
            keys: vec![key],
            ..Default::default()
        };

        self.run_on_address(Arc::new(config), addr).await?;
        Ok(())
    }

    pub fn get_key(&self) -> Result<PrivateKey> {
        let path = self.state.config.ssh_key_path();

        let key = if !path.exists() {
            let key =
                ssh_key::PrivateKey::random(&mut rand::rngs::OsRng, ssh_key::Algorithm::Ed25519)?;

            std::fs::create_dir_all(path.parent().unwrap())?;
            std::fs::write(&path, key.to_bytes()?)?;
            key
        } else {
            PrivateKey::from_bytes(&std::fs::read(&path)?)?
        };

        Ok(key)
    }

    pub fn new(containers: Containers, state: crate::app::App) -> Self {
        Self { state, containers }
    }
}

impl russh::server::Server for SshServer {
    type Handler = SshSession;

    fn handle_session_error(&mut self, error: <Self::Handler as russh::server::Handler>::Error) {
        log::error!("session error: {}", error);
    }

    fn new_client(&mut self, _: Option<SocketAddr>) -> Self::Handler {
        SshSession::new(self.containers.clone(), self.state.clone())
    }
}
