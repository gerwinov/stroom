const { merge }              = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const RobotstxtPlugin = require("robotstxt-webpack-plugin");

const common = require('./webpack.config.js');

module.exports = merge(common, {
    plugins: [
        new CleanWebpackPlugin(),
        new RobotstxtPlugin({
            policy: [{
                userAgent: "*",
                disallow: "/",
            }]
        }),
    ],
});
