// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './knex/betterment-db.db3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './knex/migrations'
    },
    seeds: {
      directory: './knex/seeds'
    }
  },
  testing: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
        filename: "./knex/test.db3"
    },
    migrations: {
        directory: './knex/migrations'
    },
    seeds: {
        directory: './knex/seeds'
    },
    pool: {
        afterCreate: (connection, done) => {
            connection.run("PRAGMA foreign_keys = ON", done)
        }
    }
},
  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './knex/migrations'
  },
  seeds: {
      directory: './knex/seeds'
  },
  },
};

