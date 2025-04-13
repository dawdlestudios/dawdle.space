mod app;
mod config;
mod mail;
mod minecraft;
mod screenshot;
mod utils;
mod web;

pub use app::App;
use log::LevelFilter;
use std::net::{IpAddr, Ipv4Addr, SocketAddr};
use std::str::FromStr;
use tokio::select;

#[actix_web::main]
async fn main() -> eyre::Result<()> {
    env_logger::builder().filter_level(LevelFilter::Info).init();

    let config = config::Config::load()?;
    let app = App::new(config.clone()).await?;

    if let Some((username, password)) = config.clone().create_admin_user {
        let _ = app.users.create(&username, &password, Some("admin")).await;
        let _ = app
            .sites
            .create(&format!("{}.dawdle.space", username), &username, false)
            .await;
    }

    let api_addr = SocketAddr::new(
        IpAddr::from_str(&app.config.web.interface).unwrap_or(Ipv4Addr::UNSPECIFIED.into()),
        app.config.web.port,
    );

    let api_server = web::run(app.clone(), api_addr);

    select! {
        res = api_server => res?,
        res = app.sites.screenshot_cron(std::time::Duration::from_secs(60 * 60)) => res,
    }

    Ok(())
}
