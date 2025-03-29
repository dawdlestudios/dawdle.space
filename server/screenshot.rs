use eyre::Result;
use fantoccini::ClientBuilder;
use image::{ImageReader, codecs::avif::AvifEncoder};
use serde_json::json;
use std::{
    io::{BufWriter, Cursor},
    path::PathBuf,
    sync::LazyLock,
    time::Duration,
};
use tokio::{sync::Semaphore, task::JoinSet, time::sleep};

pub struct ScreenshotSite {
    pub url: String,
    pub dest: PathBuf,
}

pub async fn screenshot(sites: Vec<ScreenshotSite>) -> Result<()> {
    static SEMAPHORE: LazyLock<Semaphore> = LazyLock::new(|| Semaphore::new(1));
    let Ok(_guard) = SEMAPHORE.try_acquire() else {
        return Ok(());
    };

    let cap = json!({
        "moz:firefoxOptions": {
            "args": [
                "--headless",
            ],
        }
    });

    let client = ClientBuilder::rustls()?
        .capabilities(cap.as_object().unwrap().clone())
        .connect("http://localhost:4444")
        .await?;
    client.set_window_size(1024, 768).await?;

    let mut set = JoinSet::new();
    for site in sites {
        client.goto(&site.url).await?;
        let url = client.current_url().await?;
        if !url.domain().is_some_and(|d| d.ends_with(".dawdle.space")) {
            log::info!("Invalid URL: {url} / {:?}", url.domain());
            continue;
        }

        client
            .execute("document.activeElement.blur();", vec![])
            .await?;

        sleep(Duration::from_secs(5)).await;
        let pixels = client.screenshot().await?;

        set.spawn_blocking(|| {
            let img = ImageReader::with_format(Cursor::new(pixels), image::ImageFormat::Png);
            let img = img.decode()?;
            let out = BufWriter::new(std::fs::File::create(site.dest)?);
            img.write_with_encoder(AvifEncoder::new_with_speed_quality(out, 5, 90))?;
            eyre::Ok(())
        });
    }
    set.join_all().await.into_iter().collect::<Result<()>>()?;
    client.close().await?;

    Ok(())
}

#[cfg(test)]
mod tests {
    use super::*;

    #[tokio::test]
    async fn test_screenshot() -> Result<()> {
        let url = "https://henry.dawdle.space".to_string();
        let dest = PathBuf::from("screenshot.avif");
        let sites = vec![ScreenshotSite { url, dest }];
        screenshot(sites).await?;
        Ok(())
    }
}
