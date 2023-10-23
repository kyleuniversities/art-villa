require('dotenv').config();

// TODO: Index.js and knex migration

// Connection data
const DATABASE_HOST = process.env['DATABASE_HOST'];
const DATABASE_PORT = process.env['DATABASE_PORT'];
const DATABASE_USERNAME = process.env['DATABASE_USERNAME'];
const DATABASE_PASSWORD = process.env['DATABASE_PASSWORD'];

// TODO: Knex Migrations (Make it work)

// Function for creating database setup
const makeSqlBuilder = (databaseKey) => {
  return {
    client: 'mysql2',
    connection: {
      host: DATABASE_HOST,
      port: DATABASE_PORT,
      user: DATABASE_USERNAME,
      password: DATABASE_PASSWORD,
      database: process.env[databaseKey],
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  };
};

// Object for database connection
const knexfile = {
  development: makeSqlBuilder('DATABASE_DATABASE'),
};

// Exports the database connection
module.exports = knexfile;
