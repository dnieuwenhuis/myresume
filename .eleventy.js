module.exports = (eleventyConfig) => {
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