const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

const config = {
  entry: path.resolve(__dirname, '..', 'src'),
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    publicPath: '/',
    filename: 'app.bundle.js',
  },
  resolve: {
    extensions: ['.js', '.css'],
  },
  module: {
    rules: [
      { test: '/\.js$/', use: 'babel-loader' },
      { test: '/\.css$/', use: ['style-loader', 'css-loader'] },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: path.resolve(__dirname, '..', 'public', 'index.html') })
  ],
};

module.exports = config;
