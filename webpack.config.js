var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval',
  entry: {
    AppName: './app/AppName.js'
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        include: /app/,
        exclude: [/node_modules/, /config/],
        loader: 'eslint-loader'
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        include: /app/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react'],
          plugins: ['transform-object-assign']
        }
      }
    ]
  },
  output: {
    filename: '[name].bundle.js',
    path: './public/js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    }),
    // needed for Axios IE11 support
    new webpack.ProvidePlugin({
      'Promise': 'es6-promise'
    }),
    new HtmlWebpackPlugin({
      filename: '../index.html',
      template: 'index_template.ejs',
      minify: false
    }),
  ],
  resolve: {
    alias: {
      actions: path.join(__dirname, 'app/actions'),
      components: path.join(__dirname, 'app/components'),
      config: path.join(__dirname, 'app/config'),
      constants: path.join(__dirname, 'app/constants'),
      stores: path.join(__dirname, 'app/stores'),
      utils: path.join(__dirname, 'app/utils')
    }
  }
};