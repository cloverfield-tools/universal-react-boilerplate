var webpack = require('webpack');
var path = require('path');
var env = process.env.NODE_ENV || 'development';
var minify = process.env.MINIFY || false;

var eslintLoader = {
  test: /\.js$/,
  loaders: ['eslint'],
  include: path.resolve('./source')
};

var uglifyPlugin = new webpack.optimize.UglifyJsPlugin({
  sourceMap: true
});


module.exports = {
  devtool: 'sourcemap',

  entry: './app/node_modules/client/index.js',

  output: {
    filename: minify ? 'bundle.min.js' : 'bundle.js',
    path: path.resolve('./app/node_modules/public/js')
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"' + env + '"'
      }
    })
  ].concat(minify ? [uglifyPlugin] : []),

  module: {
    preLoaders: env === 'development' ? [
      eslintLoader
    ] : [],
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel?plugins=object-assign'],
        include: path.resolve('./app/node_modules')
      }
    ]
  },

  resolve: {
    extensions: ['', '.js']
  },

  stats: {
    colors: true
  },

  eslint: {
    configFile: './.eslintrc'
  }
};
