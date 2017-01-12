var config = require('./../../../../knexfile');

let knexConfig;

if (process.env.NODE_ENV === 'production') {
  knexConfig = config.production;
} else {
  knexConfig = config.development;
}

var knex = require('knex')(knexConfig);

module.exports = knex;
