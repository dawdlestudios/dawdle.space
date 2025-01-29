use std::collections::HashMap;
use std::net::SocketAddr;
use std::sync::Arc;
use std::time::Duration;

use dashmap::DashMap;
use eyre::Result;
use log::{error, info};
use rand::rngs::OsRng;
use russh::server::{Auth, Msg, Server as _, Session};
use russh::{Channel, ChannelId};
use russh_sftp::protocol::{
    Attrs, Data, File, FileAttributes, Handle, Name, OpenFlags, Packet, Status, StatusCode, Version,
};

pub async fn run(app: crate::app::App, addr: SocketAddr) -> Result<()> {
    let config = russh::server::Config {
        auth_rejection_time: Duration::from_secs(3),
        auth_rejection_time_initial: Some(Duration::from_secs(0)),
        keys: vec![
            russh::keys::PrivateKey::random(&mut OsRng, russh::keys::Algorithm::Ed25519).unwrap(),
        ],
        ..Default::default()
    };

    let mut server = Server { _app: app };

    server.run_on_address(Arc::new(config), addr).await?;
    Ok(())
}

#[derive(Clone)]
struct Server {
    _app: crate::app::App,
}

impl russh::server::Server for Server {
    type Handler = SshSession;

    fn new_client(&mut self, _: Option<SocketAddr>) -> Self::Handler {
        SshSession::default()
    }
}

struct SshSession {
    clients: Arc<DashMap<ChannelId, Channel<Msg>>>,
}

impl Default for SshSession {
    fn default() -> Self {
        Self {
            clients: Arc::new(DashMap::new()),
        }
    }
}

impl SshSession {
    pub async fn get_channel(&mut self, channel_id: ChannelId) -> Channel<Msg> {
        self.clients.remove(&channel_id).unwrap().1
    }
}

impl russh::server::Handler for SshSession {
    type Error = eyre::Error;

    async fn auth_password(&mut self, user: &str, password: &str) -> Result<Auth, Self::Error> {
        info!("credentials: {}, {}", user, password);
        Ok(Auth::Accept)
    }

    async fn auth_publickey(
        &mut self,
        _user: &str,
        _public_key: &russh::keys::ssh_key::PublicKey,
    ) -> Result<Auth, Self::Error> {
        Ok(Auth::UnsupportedMethod)
    }

    async fn channel_open_session(
        &mut self,
        channel: Channel<Msg>,
        _session: &mut Session,
    ) -> Result<bool, Self::Error> {
        self.clients.insert(channel.id(), channel);
        Ok(true)
    }

    async fn channel_eof(
        &mut self,
        channel: ChannelId,
        session: &mut Session,
    ) -> Result<(), Self::Error> {
        session.close(channel)?;
        Ok(())
    }

    async fn subsystem_request(
        &mut self,
        channel_id: ChannelId,
        name: &str,
        session: &mut Session,
    ) -> Result<(), Self::Error> {
        if name == "sftp" {
            let channel = self.get_channel(channel_id).await;
            let sftp = SftpSession::default();
            session.channel_success(channel_id)?;
            russh_sftp::server::run(channel.into_stream(), sftp).await;
        } else {
            session.channel_failure(channel_id)?;
        }
        Ok(())
    }
}

#[derive(Default)]
struct SftpSession {
    version: Option<u32>,
    root_dir_read_done: bool,
}

#[async_trait::async_trait]
impl russh_sftp::server::Handler for SftpSession {
    type Error = StatusCode;

    fn unimplemented(&self) -> Self::Error {
        StatusCode::OpUnsupported
    }

    async fn init(
        &mut self,
        version: u32,
        extensions: HashMap<String, String>,
    ) -> Result<Version, Self::Error> {
        if self.version.is_some() {
            error!("duplicate SSH_FXP_VERSION packet");
            return Err(StatusCode::ConnectionLost);
        }

        self.version = Some(version);
        info!("version: {:?}, extensions: {:?}", self.version, extensions);
        Ok(Version::new())
    }

    async fn close(&mut self, id: u32, _handle: String) -> Result<Status, Self::Error> {
        Ok(Status {
            id,
            status_code: StatusCode::Ok,
            error_message: "Ok".to_string(),
            language_tag: "en-US".to_string(),
        })
    }

    async fn opendir(&mut self, id: u32, path: String) -> Result<Handle, Self::Error> {
        info!("opendir: {}", path);
        self.root_dir_read_done = false;
        Ok(Handle { id, handle: path })
    }

    async fn readdir(&mut self, id: u32, handle: String) -> Result<Name, Self::Error> {
        info!("readdir handle: {}", handle);
        if handle == "/" && !self.root_dir_read_done {
            self.root_dir_read_done = true;
            return Ok(Name {
                id,
                files: vec![
                    File::new("foo", FileAttributes::default()),
                    File::new("bar", FileAttributes::default()),
                ],
            });
        }
        // If all files have been sent to the client, respond with an EOF
        Err(StatusCode::Eof)
    }

    async fn realpath(&mut self, id: u32, path: String) -> Result<Name, Self::Error> {
        info!("realpath: {}", path);
        Ok(Name {
            id,
            files: vec![File::dummy("/")],
        })
    }

    /// Called on SSH_FXP_OPEN
    #[allow(unused_variables)]
    async fn open(
        &mut self,
        id: u32,
        filename: String,
        pflags: OpenFlags,
        attrs: FileAttributes,
    ) -> Result<Handle, Self::Error> {
        Err(self.unimplemented())
    }

    /// Called on SSH_FXP_READ
    #[allow(unused_variables)]
    async fn read(
        &mut self,
        id: u32,
        handle: String,
        offset: u64,
        len: u32,
    ) -> Result<Data, Self::Error> {
        Err(self.unimplemented())
    }

    /// Called on SSH_FXP_WRITE
    #[allow(unused_variables)]
    async fn write(
        &mut self,
        id: u32,
        handle: String,
        offset: u64,
        data: Vec<u8>,
    ) -> Result<Status, Self::Error> {
        Err(self.unimplemented())
    }

    /// Called on SSH_FXP_LSTAT
    #[allow(unused_variables)]
    async fn lstat(&mut self, id: u32, path: String) -> Result<Attrs, Self::Error> {
        Err(self.unimplemented())
    }

    /// Called on SSH_FXP_FSTAT
    #[allow(unused_variables)]
    async fn fstat(&mut self, id: u32, handle: String) -> Result<Attrs, Self::Error> {
        Err(self.unimplemented())
    }

    /// Called on SSH_FXP_SETSTAT
    #[allow(unused_variables)]
    async fn setstat(
        &mut self,
        id: u32,
        path: String,
        attrs: FileAttributes,
    ) -> Result<Status, Self::Error> {
        Err(self.unimplemented())
    }

    /// Called on SSH_FXP_FSETSTAT
    #[allow(unused_variables)]
    async fn fsetstat(
        &mut self,
        id: u32,
        handle: String,
        attrs: FileAttributes,
    ) -> Result<Status, Self::Error> {
        Err(self.unimplemented())
    }

    /// Called on SSH_FXP_REMOVE.
    /// The status can be returned as Ok or as Err
    #[allow(unused_variables)]
    async fn remove(&mut self, id: u32, filename: String) -> Result<Status, Self::Error> {
        Err(self.unimplemented())
    }

    /// Called on SSH_FXP_MKDIR
    #[allow(unused_variables)]
    async fn mkdir(
        &mut self,
        id: u32,
        path: String,
        attrs: FileAttributes,
    ) -> Result<Status, Self::Error> {
        Err(self.unimplemented())
    }

    /// Called on SSH_FXP_RMDIR.
    /// The status can be returned as Ok or as Err
    #[allow(unused_variables)]
    async fn rmdir(&mut self, id: u32, path: String) -> Result<Status, Self::Error> {
        Err(self.unimplemented())
    }

    /// Called on SSH_FXP_STAT
    #[allow(unused_variables)]
    async fn stat(&mut self, id: u32, path: String) -> Result<Attrs, Self::Error> {
        Err(self.unimplemented())
    }

    /// Called on SSH_FXP_RENAME.
    /// The status can be returned as Ok or as Err
    #[allow(unused_variables)]
    async fn rename(
        &mut self,
        id: u32,
        oldpath: String,
        newpath: String,
    ) -> Result<Status, Self::Error> {
        Err(self.unimplemented())
    }

    /// Called on SSH_FXP_READLINK
    #[allow(unused_variables)]
    async fn readlink(&mut self, id: u32, path: String) -> Result<Name, Self::Error> {
        Err(self.unimplemented())
    }

    /// Called on SSH_FXP_SYMLINK.
    /// The status can be returned as Ok or as Err
    #[allow(unused_variables)]
    async fn symlink(
        &mut self,
        id: u32,
        linkpath: String,
        targetpath: String,
    ) -> Result<Status, Self::Error> {
        Err(self.unimplemented())
    }

    /// Called on SSH_FXP_EXTENDED.
    /// The extension can return any packet, so it's not specific.
    /// If the server does not recognize the `request' name
    /// the server must respond with an SSH_FX_OP_UNSUPPORTED error
    #[allow(unused_variables)]
    async fn extended(
        &mut self,
        id: u32,
        request: String,
        data: Vec<u8>,
    ) -> Result<Packet, Self::Error> {
        Err(self.unimplemented())
    }
}
