const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/app/app.js',
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
  module: {
    rules: [
      {
        exclude: /index\.html/,
        test: /\.html$/,
        use: [
          { loader:'ngtemplate-loader', options: {
            relativeTo: './src/app'
          }},
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