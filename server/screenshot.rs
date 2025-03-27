use eyre::{Result, bail};
use image::{ImageReader, codecs::avif::AvifEncoder};
use std::{
    io::{BufWriter, Cursor},
    path::PathBuf,
    sync::LazyLock,
};
use tokio::{sync::Semaphore, task::spawn_blocking};

use fantoccini::Client;

static SEMAPHORE: LazyLock<Semaphore> = LazyLock::new(|| Semaphore::new(1));

async fn screenshot(client: Client, url: String, dest: PathBuf) -> Result<()> {
    let _guard = SEMAPHORE.acquire().await?;
    client.set_window_size(1024, 768).await?;
    client.goto(&url).await?;
    let url = client.current_url().await?;
    if !url.domain().is_some_and(|d| d.ends_with(".dawdle.space")) {
        bail!("Invalid URL: {url} / {:?}", url.domain());
    }
    client
        .execute("document.activeElement.blur();", vec![])
        .await?;
    let pixels = client.screenshot().await?;

    spawn_blocking(|| {
        let img = ImageReader::with_format(Cursor::new(pixels), image::ImageFormat::Png);
        let img = img.decode()?;
        let out = BufWriter::new(std::fs::File::create(dest)?);
        img.write_with_encoder(AvifEncoder::new_with_speed_quality(out, 5, 90))?;
        eyre::Ok(())
    })
    .await??;

    Ok(())
}

#[cfg(test)]
mod tests {
    use super::*;
    use fantoccini::ClientBuilder;
    use serde_json::json;

    #[tokio::test]
    async fn test_screenshot() -> Result<()> {
        let cap = json!({
            "moz:firefoxOptions": {
                "args": [
                    "--headless",
                    "--width=1024",
                    "--height=768",
                    "--no-sandbox",
                    "--disable-gpu",
                    "--disable-dev-shm-usage",
                ],
            }
        });

        let client = ClientBuilder::rustls()?
            .capabilities(cap.as_object().unwrap().clone())
            .connect("http://localhost:4444")
            .await?;

        let url = "https://lastfm-iceberg.dawdle.space".to_string();
        let dest = PathBuf::from("screenshot.avif");
        screenshot(client.clone(), url, dest).await?;
        client.close().await?;
        Ok(())
    }
}
