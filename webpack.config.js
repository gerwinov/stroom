const path                 = require('path');
const HtmlWebpackPlugin    = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const env = process.env.NODE_ENV;

module.exports = {
  mode: process.env.NODE_ENV,

  entry: './src/js/main.js',

  output: {
    publicPath: '',
    filename: env === 'development' ? 'bundle.js' : 'bundle.[contenthash].min.js',
    chunkFilename: env === 'development' ? 'dist/[name].js' : 'dist/[name].[contenthash].min.js',
    path: path.resolve(__dirname, 'dist'),
  },

  devServer: {
    open: true
  },

  module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
        },

        {
            test: /\.css$/,
            use: [
            env === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
            { loader: 'css-loader', options: { importLoaders: 2 } },
            { loader: 'postcss-loader' },
            ]
        },

        {
            test: /\.(png|jpe?g|gif|svg|otf|pdf)$/i,
            use: [
            {
                loader: 'file-loader',
                options: {
                  outputPath: 'assets',
                  publicPath: 'assets'
                },
            },
            ],
        },

        {
            test: /\.html$/i,
            loader: 'html-loader',
        }
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].min.css'
    }),

    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html'
    }),
  ],
}
