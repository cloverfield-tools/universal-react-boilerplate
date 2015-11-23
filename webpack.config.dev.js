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
    new webpack.NoErrorsPlugin(),
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      include: path.join(__dirname, 'source'),
      loader: 'babel',
      query: {
        stage: 0,
          plugins: ['react-transform'],
          extra: {
            'react-transform': {
              'transforms': [{
                'transform': 'react-transform-hmr',
                'imports': ['react'],
                'locals': ['module']
              }, {
                'transform': 'react-transform-catch-errors',
                'imports': ['react', 'redbox-react']
              }]
            }
          }
        }
    }]
  }
};
