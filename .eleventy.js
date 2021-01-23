const shortcodes = require('./utils/shortcodes');

module.exports = config => {
    config.addWatchTarget('./dist/bundle.js');
    config.addPassthroughCopy({ 
        './dist/': '/',
        './src/assets': 'assets',
        './src/CNAME': '',
        './src/favicon.ico': '',
        './src/robots.txt': '',
    });

    for (const [name, func] of Object.entries(shortcodes)) {
        config.addNunjucksAsyncShortcode(name, func)
    }

    return {
      dir: {
        includes: '_components',
        input: 'src',
        layouts: '_layouts',
      },
      markdownTemplateEngine: 'ejs'
    };
};
