const UglifyJS = require("uglify-js");

module.exports = (eleventyConfig) => {
    // Add some utility filters
    eleventyConfig.addFilter("dateDisplay", require("./src/filters/date.js"));

    eleventyConfig.addWatchTarget("./src/scss/");

    eleventyConfig.addPassthroughCopy("./src/fonts")

    // Minify JS
    eleventyConfig.addFilter("jsmin", function (code) {
        let minified = UglifyJS.minify(code);
        if (minified.error) {
            console.log("UglifyJS error: ", minified.error);
            return code;
        }
        return minified.code;
    });

    return {
        dir: {
            input: 'src',
            output: 'public',
            data: '_data'
        },
        passthroughFileCopy: true
    };
}