const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

const path = require('path');

const webpackCommon = require('./webpack.common');

const { DEVELOPMENT } = require('./constants');

console.log(DEVELOPMENT);
const config = webpackMerge(webpackCommon, {
  mode: DEVELOPMENT,
  devServer: {
    contentBase: path.resolve(__dirname, '..', 'dist'),
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
});

console.log(JSON.stringify(config, null, 2));

module.exports = config;
