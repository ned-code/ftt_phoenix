'use strict';
let webpack = require("webpack");
let path = require("path");
let CleanWebpackPlugin = require('clean-webpack-plugin');

let DIR = path.resolve(__dirname, '..');
let DIST_DIR = path.join(DIR, 'dist');

module.exports = {
	target:  "web",
	cache:   false,
	context: __dirname,
	debug:   false,
	devtool: false,
	entry:   ["../app/client/client.js"],
	output:  {
		path:          path.join(__dirname, "../dist/client/"),
		filename:      "client.js",
		chunkFilename: "[name].[id].js"
	},
	plugins: [
		new webpack.DefinePlugin({__CLIENT__: true, __SERVER__: false, __PRODUCTION__: true, __DEV__: false}),
		new webpack.DefinePlugin({"process.env": {NODE_ENV: '"production"'}}),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}}),
        new CleanWebpackPlugin(['client'], { root: DIST_DIR, verbose: true, dry: false })
	],
	module:  {
		postLoaders: [
			{test: /\.js$/, loaders: ["babel"], exclude: /node_modules/}
		],
		noParse: /\.min\.js/
	},
	resolve: {
		modulesDirectories: [
			"app",
			"node_modules",
		],
		extensions: ["", ".js"]
	},
	node:    {
		__dirname: true,
		fs:        'empty'
	}
};
