var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = require('./webpack.config.js');

config.devtool = 'cheap-module-source-map';
config.module.preLoaders = [];
config.plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  }),
  // needed for Axios IE11 support
  new webpack.ProvidePlugin({
    'Promise': 'es6-promise'
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: { warnings: false }
  }),
  new HtmlWebpackPlugin({
    filename: '../index.html',
    template: 'index_template.ejs',
    minify: false
  })
];

module.exports = config;