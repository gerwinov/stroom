const { merge }              = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const common = require('./webpack.config.js');

module.exports = merge(common, {
    watch: false,

    plugins: [
        new CleanWebpackPlugin(),
    ],
});
