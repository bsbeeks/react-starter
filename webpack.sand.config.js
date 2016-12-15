var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = require('./webpack.config.js');

config.plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('sand')
    },
    // needed for Axios IE11 support
    new webpack.ProvidePlugin({
      'Promise': 'es6-promise'
    }),
    new HtmlWebpackPlugin({
      filename: '../index.html',
      template: 'index_template.ejs',
      minify: false
    })
  })
];

module.exports = config;