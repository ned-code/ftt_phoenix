'use strict';
let webpack = require("webpack");
let path = require("path");
let config = require("./webpack.server.js");
let CleanWebpackPlugin = require('clean-webpack-plugin');

let DIR = path.resolve(__dirname, '..');
let DIST_DIR = path.join(DIR, 'dist');

config.cache   = true;
config.debug   = true;

config.entry.unshift(
	"webpack/hot/poll?1000"
);

config.plugins = [
	new webpack.DefinePlugin({__CLIENT__: false, __SERVER__: true, __PRODUCTION__: false, __DEV__: true}),
	new webpack.HotModuleReplacementPlugin(),
	new webpack.NoErrorsPlugin(),
    new CleanWebpackPlugin(['server'], { root: DIST_DIR, verbose: true, dry: false })
];

module.exports = config;
