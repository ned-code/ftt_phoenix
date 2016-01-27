'use strict';
const DS = '\\';
const NODE_ENV = process.env.NODE_ENV;

let config = require(__dirname + DS + NODE_ENV + DS + 'webpack.config.js');

module.exports = config;


