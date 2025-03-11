use comrak::{
    ExtensionOptions, ParseOptions, Plugins, RenderOptions, RenderPlugins,
    plugins::syntect::SyntectAdapter,
};

pub fn md_to_html(buf: &str) -> String {
    let options = comrak::ComrakOptions {
        parse: ParseOptions::default(),
        render: RenderOptions::builder().unsafe_(true).build(),
        extension: ExtensionOptions::builder()
            .front_matter_delimiter("---".to_string())
            .build(),
    };
    let syntax_highlighter = SyntectAdapter::new(Some("base16-ocean.dark"));

    let renderer = RenderPlugins::builder()
        .codefence_syntax_highlighter(&syntax_highlighter)
        .build();

    comrak::markdown_to_html_with_plugins(
        buf,
        &options,
        &Plugins::builder().render(renderer).build(),
    )
}
