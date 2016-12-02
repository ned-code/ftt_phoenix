//https://github.com/brianc/node-postgres

import knex from 'knex';

export default class PostgreSQLDB {
  constructor () {
    this.knex = knex({
      client: 'postgres',
      connection: {
        host: '127.0.0.1',
        user: 'docker',
        password: 'docker',
        database: 'docker'
      }
    });
  }
}
