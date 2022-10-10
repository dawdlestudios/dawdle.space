module.exports = function (eleventyConfig) {
  // Output directory: _site

  // Copy `assets/` to `_site/assets`
  eleventyConfig.addPassthroughCopy("assets");

  eleventyConfig.addHandlebarsHelper("image", (title, image_url) =>
    `<a href=${image_url}><figure><img src="${image_url}" alt="${title}"><figcaption>${title}</figcaption></figure></a>`)
  ;

  return {
    dir: {
      input: "pages",
    },
    htmlTemplateEngine: "hbs"
  };
};
