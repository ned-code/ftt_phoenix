'use strick';
var env = ["local", "production"].indexOf(process.env.NODE_ENV) !== -1 ? process.env.NODE_ENV : "local";
var path = './webpack/' + env + '.webpack.config.js'
console.log(env, path);
var config = require(path);

module.exports = config;
