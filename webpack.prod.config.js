'use strict';
let path = require('path');
let webpack = require('webpack');

module.exports = {
  entry: {
    'bootstrap.prod': './app/bootstrap.ts',
    'bootstrap.aot.prod': './app/bootstrap.aot.ts',
  },

  context: path.join(process.cwd(), 'src'),

  output: require('./webpack/output'),

  module: require('./webpack/module'),

  plugins: require('./webpack/plugins').concat([
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      },
      sourceMap: true
    })
  ]),

  resolve: require('./webpack/resolve'),

  devtool: 'source-map'
};
