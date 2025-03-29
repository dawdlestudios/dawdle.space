use actix_web::{
    Error,
    body::MessageBody,
    dev::{ServiceRequest, ServiceResponse},
    middleware::Next,
};
use awc::body::EitherBody;

static AI_USER_AGENTS: &[&str] = &[
    "AI2Bot",
    "Ai2Bot-Dolma",
    "Amazonbot",
    "anthropic-ai",
    "Applebot",
    "Applebot-Extended",
    "Brightbot",
    "Bytespider",
    "CCBot",
    "ChatGPT-User",
    "Claude-Web",
    "ClaudeBot",
    "cohere-ai",
    "cohere-training-data-crawler",
    "Crawlspace",
    "Diffbot",
    "DuckAssistBot",
    "FacebookBot",
    "FriendlyCrawler",
    "Google-Extended",
    "GoogleOther",
    "GoogleOther-Image",
    "GoogleOther-Video",
    "GPTBot",
    "iaskspider",
    "ICC-Crawler",
    "ImagesiftBot",
    "img2dataset",
    "ISSCyberRiskCrawler",
    "Kangaroo Bot",
    "Meta-ExternalAgent",
    "Meta-ExternalFetcher",
    "OAI-SearchBot",
    "omgili",
    "omgilibot",
    "PanguBot",
    "PerplexityBot",
    "Perplexity",
    "PetalBot",
    "Scrapy",
    "SemrushBot-OCOB",
    "SemrushBot-SWA",
    "Sidetrade",
    "Timpibot",
    "VelenPublicWebCrawler",
    "Webzio-Extended",
    "YouBot",
];

pub async fn middleware(
    req: ServiceRequest,
    next: Next<impl MessageBody>,
) -> Result<ServiceResponse<EitherBody<impl MessageBody>>, Error> {
    let user_agent = req
        .headers()
        .get("User-Agent")
        .map(|h| h.to_str().unwrap_or(""))
        .unwrap_or("");

    let is_ai_user_agent = AI_USER_AGENTS
        .iter()
        .any(|&agent| user_agent.contains(agent));

    if is_ai_user_agent {
        return Ok(req.into_response(
            actix_web::HttpResponse::Forbidden()
                .body("Access denied for AI user agents")
                .map_into_boxed_body()
                .map_into_right_body(),
        ));
    }

    next.call(req)
        .await
        .map(ServiceResponse::map_into_left_body)
}
