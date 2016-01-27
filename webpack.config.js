'use strict';
let path = require('path');
const CONFIG_FOLDER = path.join(__dirname, 'config');

let config = require(path.join(CONFIG_FOLDER, 'webpack.config.js')); 

module.exports = config;


