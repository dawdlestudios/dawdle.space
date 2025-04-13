use eyre::Result;
use serde_json::json;

pub mod messages;

#[derive(Clone)]
pub struct Mail {
    // pool: AsyncSmtpTransport<Tokio1Executor>,
    config: crate::config::MailConfig,
    client: reqwest::Client,
}

pub type PlainText = String;
pub type HtmlText = String;

impl Mail {
    pub fn try_new(config: &crate::config::Config) -> Result<Self> {
        Ok(Self {
            config: config.mail.clone(),
            client: reqwest::Client::new(),
        })
    }

    pub async fn send(&self, to: &str, subject: &str, body: (HtmlText, PlainText)) -> Result<()> {
        let res = self
            .client
            .post("https://api.brevo.com/v3/smtp/email")
            .header("api-key", self.config.brevo_api_key.clone())
            .header("Accept", "application/json")
            .json(&json!({
                "sender": {
                    "name": self.config.from_name,
                    "email": self.config.from_address,
                },
                "to": [{
                    "email": to,
                }],
                "subject": subject,
                "htmlContent": body.0,
                "textContent": body.1,
            }))
            .send()
            .await?
            .json::<serde_json::Value>()
            .await?;

        log::info!("Sending email to {to} with subject {subject}");
        log::info!("Email: {res:?}");

        Ok(())
    }

    // pub fn try_new(config: &crate::config::Config) -> Result<Self> {
    //     let pool = AsyncSmtpTransport::<Tokio1Executor>::relay(&config.mail.smtp_host)?
    //         .port(config.mail.smtp_port)
    //         .credentials(Credentials::new(
    //             config.mail.smtp_user.clone(),
    //             config.mail.smtp_pass.clone(),
    //         ))
    //         .build();

    //     Ok(Self {
    //         pool,
    //         config: config.mail.clone(),
    //     })
    // }

    // pub async fn send(
    //     &self,
    //     to: &str,
    //     subject: &str,
    //     body: (HtmlText, PlainText),
    // ) -> Result<Response> {
    //     let message = lettre::Message::builder()
    //         .from(Mailbox::new(
    //             Some(self.config.from_name.clone()),
    //             self.config.from_address.clone().parse()?,
    //         ))
    //         .to(Mailbox::new(None, to.parse()?))
    //         .subject(subject)
    //         .multipart(MultiPart::alternative_plain_html(body.1, body.0))?;

    //     log::info!("Sending email to {to} with subject {subject}");
    //     log::info!("Email: {message:?}");

    //     Ok(self.pool.send(message).await?)
    // }
}
