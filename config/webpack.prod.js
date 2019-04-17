const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

const webpackCommon = require('./webpack.common');

const { PRODUCTION } = require('./modes');

const config = webpackMerge(webpackCommon, {
  mode: PRODUCTION,
});

module.exports = config;
