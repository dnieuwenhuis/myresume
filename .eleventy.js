module.exports = (eleventyConfig) => {
    // Add some utility filters
    eleventyConfig.addFilter("dateDisplay", require("./src/filters/date.js"));

    eleventyConfig.addWatchTarget("./src/scss/");

    return {
        dir: {
            input: 'src',
            output: 'public',
            data: '_data'
        },
        passthroughFileCopy: true
    };
}