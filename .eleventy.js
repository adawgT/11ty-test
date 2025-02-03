
// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addPassthroughCopy("**/*.jpg");
  eleventyConfig.addShortcode("formatDate", function(date) {
    return new Date(date).toDateString();
  });

  return {
    dir: {
      input: "site",
      output: "_site"
    }
  };
};