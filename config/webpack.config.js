'use strict';
const DS = '\\';
const ENV = process.env.NODE_ENV || "local";

let config = require(__dirname + DS + ENV + DS + 'webpack.config.js');

module.exports = config;


