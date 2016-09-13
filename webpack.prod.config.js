var path = require('path');
var webpack = require('webpack');

var config = require('./webpack.config.js');

config.devtool = 'cheap-module-source-map';
config.module.preLoaders = [];
config.plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: { warnings: false }
  })
];

module.exports = config;