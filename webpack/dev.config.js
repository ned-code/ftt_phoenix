const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: {
    main: [
    'bootstrap-loader',
    'webpack-hot-middleware/client',
    './app/index'
    ],
  },

  resolve: {
    unsafeCache: true,
  },

  module: {
    loaders: [{
      test: /\.scss$/,
      exclude: /node_modules/,
      loader: ExtractTextPlugin.extract('style-loader', 'css!postcss-loader!sass-loader')
    }],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
