// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      database: 'familytreetop',
      user:     '',
      password: ''
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  staging: {
    client: 'mysql',
    connection: {
      database: 'familytreetop',
      user:     '',
      password: ''
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'mysql',
    connection: {
      database: 'familytreetop',
      user:     '',
      password: ''
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
