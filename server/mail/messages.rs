const STYLES: &'static str = "<style>
p {
  font-family: monospace
}

a {
  color: #00b1cd;
}

#disclaimer {
  color: #606060
}

#disclaimer a {
  color: #242424
}
</style>";

const FOOTER: &'static str = "<p style=\"font-family: monospace\">
&nbsp;/\\_/\\<br/>
(&nbsp;o.o&nbsp;)&nbsp;&nbsp;&nbsp;Your dawdle.space team :)<br/>
&nbsp;>&nbsp;^&nbsp;<<br/>
</p>
<p id=\"disclaimer\">
  If you didn't request this email, please ignore it — your data won't be stored or processed further. For questions about privacy, see our <a href=\"https://dawdle.space/privacy\">privacy policy</a> /
  <a href=\"{{ unsubscribe }}\">click here to unsubscribe</a>.
</p>";

const FOOTER_PLAIN: &'static str = "
 /\\_/\\
( o.o )   Your dawdle.space team :)
 > ^ <

If you didn't request this email, please ignore it — your data won't be stored or processed further. For questions about privacy, see https://dawdle.space/privacy or unsubscribe at: {{ unsubscribe }}.";

fn html_mail(text: String) -> String {
    format!(
        "<!DOCTYPE html>
<html lang=\"en\">
<head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width\">{STYLES}</head>
<body>{text}\n{FOOTER}</body></html>",
    )
}

fn plain_mail(text: String) -> String {
    format!("{text}\n\n{FOOTER_PLAIN}",)
}

pub fn application_received(username: &str) -> (String, String) {
    (
        html_mail(format!(
"<p style=\"font-family: monospace\">
    Hey {username},<br/><br/>
    Thanks for your interest in joining <a href=\"https://dawdle.space/\"><strong>dawdle.space</strong></a>!<br/><br/>
    We've received your application and will review it shortly. You will receive another email once your account is approved.<br/><br/>
</p>"
        )),
        plain_mail(format!(
"Hey {username},\n
Thanks for your interest in joining dawdle.space!\n
We've received your application and will review it shortly. You will receive another email once your account is approved."
        ))
    )
}

pub fn application_confirmed(username: &str, token: &str) -> (String, String) {
    (
        html_mail(format!(
"<p style=\"font-family: monospace\">
Welcome to <a href=\"https://dawdle.space/\"><strong>dawdle.space</strong></a>!<br/><br/>
You're account has been approved. Click here to verify your email and claim your account: <a href=\"https://dawdle.space/me/claim?user={username}&token={token}\">https://dawdle.space/me/claim?user={username}&token={token}</a>.
</p>"
        )),
        plain_mail(format!(
"Welcome to dawdle.space!\n
You're account has been approved.
Click here to verify your email and claim your account: https://dawdle.space/me/claim?user={username}&token={token}"
        ))
    )
}
