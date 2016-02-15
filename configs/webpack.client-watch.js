'use strict';

let path = require("path");
let webpack = require("webpack");
let config = require("./webpack.client.js");
let CleanWebpackPlugin = require('clean-webpack-plugin');
let hostname = process.env.HOSTNAME || "localhost";
let port     = 8080;


let DIR = path.resolve(__dirname, '..');
let DIST_DIR = path.join(DIR, 'dist');

config.cache   = true;
config.debug   = true;
config.devtool = "cheap-module-eval-source-map";

config.entry.unshift(
	"webpack-dev-server/client?http://" + hostname + ":" + port,
	"webpack/hot/only-dev-server"
);

config.output.publicPath = "http://" + hostname + ":" + port + "/dist/";
config.output.hotUpdateMainFilename = "update/[hash]/update.json";
config.output.hotUpdateChunkFilename = "update/[hash]/[id].update.js";

config.plugins = [
	new webpack.DefinePlugin({__CLIENT__: true, __SERVER__: false, __PRODUCTION__: false, __DEV__: true}),
	new webpack.HotModuleReplacementPlugin(),
	new webpack.NoErrorsPlugin(),
    new CleanWebpackPlugin(['client'], { root: DIST_DIR, verbose: true, dry: false })
];

config.module.postLoaders = [
	{test: /\.js$/, loaders: ["babel?cacheDirectory&presets[]=react-hmre"], exclude: /node_modules/}
];

config.devServer = {
	publicPath: config.output.publicPath,
	hot:        true,
	inline:     false,
	lazy:       false,
	quiet:      true,
	noInfo:     true,
	headers:    {"Access-Control-Allow-Origin": "*"},
	stats:      {colors: true},
	host:       hostname
};

module.exports = config;
