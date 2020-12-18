const { merge }              = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const RobotstxtPlugin = require("robotstxt-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

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

        new CopyPlugin({
            patterns: [
              { from: "src/assets/favicons", to: "assets/favicons" },
              { from: "src/assets/favicon.ico", to: "" },
              { from: "src/assets/str00m_avatar.png", to: "" },
            ],
          }),
    ],
});
