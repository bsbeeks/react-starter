var path = require('path');
var webpack = require('webpack');

var config = require('./webpack.config.js');

config.plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('sand')
    }
  })
];

module.exports = config;