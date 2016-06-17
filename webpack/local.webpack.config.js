'use strick';
var path = require('path');
var plugins = [];

if (process.env.NODE_ENV === 'production') {
  plugins.push(new webpack.HotModuleReplacementPlugin());
  plugins.push(new webpack.optimize.UglifyJsPlugin());
  plugins.push(new webpack.optimize.UglifyJsPlugin());
};

var buildPath = path.resolve(path.resolve(__dirname, ".."), "static/dist");

module.exports = {
  entry: {
    app: ['webpack-hot-middleware/client', './app/client.js'], 
  },
  output: {
    path: buildPath,
    filename: "bundle.js"
  },
  module: {
            loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /(\.eot|\.woff2|\.woff|\.ttf|\.svg)/, loader: 'file-loader' }
            ]
          },
  plugins: plugins
};
