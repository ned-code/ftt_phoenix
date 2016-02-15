'use strict';
let webpack = require("webpack");
let path = require("path");
let fs = require('fs');
let CleanWebpackPlugin = require('clean-webpack-plugin');

let DIR = path.resolve(__dirname, '..');
let DIST_DIR = path.join(DIR, 'dist');

let nodeModules = {};


fs.readdirSync('node_modules')
	.filter(function (x) {
		return ['.bin'].indexOf(x) === -1;
	})
	.forEach(function (mod) {
		nodeModules[mod] = 'commonjs ' + mod;
	});

module.exports = {
	target:  "node",
	cache:   false,
	context: __dirname,
	debug:   false,
	devtool: "source-map",
	entry:   ["../app/server/server.js"],
	output:  {
		path: path.join(__dirname, "../dist/server"),
		filename: "server.js"
	},
	plugins: [
		new webpack.DefinePlugin({__CLIENT__: false, __SERVER__: true, __PRODUCTION__: true, __DEV__: false}),
		new webpack.DefinePlugin({"process.env": {NODE_ENV: '"production"'}}),
        new CleanWebpackPlugin(['server'], { root: DIST_DIR, verbose: true, dry: false })

	],
	module:  {
		postLoaders: [
			{test: /\.js$/, loaders: ["babel"], exclude: /node_modules/}
		],
		noParse: /\.min\.js/
	},
	externals: nodeModules,
	resolve: {
		modulesDirectories: [
			"app",
			"node_modules"
		],
		extensions: ["", ".js"]
	},
	node:    {
		__dirname: true,
		fs:        'empty'
	}
};
