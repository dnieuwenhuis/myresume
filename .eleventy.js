module.exports = (eleventyConfig) => {

    return {
        dir: {
            input: 'src',
            output: '_site',
            data: '_data'
        },
        passthroughFileCopy: true
    };
}