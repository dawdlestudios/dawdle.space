module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy({ 'public': '/' });

  eleventyConfig.addLiquidShortcode(
    "lastupdated",
    () =>
      Date.now()
  );

  eleventyConfig.addLiquidShortcode(
    "image",
    (title, image_url) =>
      `<a href=${image_url}><figure><img src="${image_url}" alt="${title}"><figcaption>${title}</figcaption></figure></a>`
  );

  eleventyConfig.addFilter("bust", (url) => {
    const [urlPart, paramPart] = url.split("?");
    const params = new URLSearchParams(paramPart || "");
    params.set("v", Date.now());
    return `${urlPart}?${params}`;
  });

  return {
    dir: {
      input: "pages",
    },
    htmlTemplateEngine: "liquid",
  };
};
