'use strick';
var path = require('path');
var plugins = [];

if (process.env.NODE_ENV === 'production') {
  plugins.push( new webpack.optimize.UglifyJsPlugin());
};

module.exports = {
  entry: {
    app: ["./app/client.js"]
  },
  output: {
    path: path.resolve(__dirname, "build"),
    //publicPath: "/assets/",
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
