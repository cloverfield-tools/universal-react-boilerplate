'use strict'; // eslint-disable-line strict

var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  resolve: {
    root: __dirname + '/source'
  },
  entry: [
    'webpack-hot-middleware/client',
    './source/client/index'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'index.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: [
        path.join(__dirname, 'source'),
        path.join(__dirname, 'app-home.js')
      ]
    }]
  }
};
