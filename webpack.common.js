const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/app/app.js',
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new CopyWebpackPlugin({
        patterns: [
            {
                from: "**/*.lazy.html",
                to: "[path][name][ext]",
            },
        ],
      }),
  ],
  module: {
    rules: [
        {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        },
        {
            test: /\.js$/,
            use: [
                'babel-loader'
            ]
        },
        {
            exclude: [/\.lazy\.html$/, /index\.html/],
            test: /\.html$/,
            use: [
                { loader: 'html-loader' }
            ]
        }
    ]
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};