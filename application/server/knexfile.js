require('dotenv').config();

// TODO: Index.js and knex migration

// Connection data
const AWS_RDS_HOST = process.env['AWS_RDS_HOST'];
const AWS_RDS_USERNAME = process.env['AWS_RDS_USERNAME'];
const AWS_RDS_PASSWORD = process.env['AWS_RDS_PASSWORD'];

// Function for creating database setup
const makeSqlBuilder = (databaseKey) => {
  return {
    client: 'mysql2',
    connection: {
      host: AWS_RDS_HOST,
      user: AWS_RDS_USERNAME,
      password: AWS_RDS_PASSWORD,
      database: process.env[databaseKey],
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  };
};

// Object for database connection
const knexfile = {
  development: makeSqlBuilder('AWS_RDS_DEVELOPMENT_DATABASE'),
};

// Exports the database connection
module.exports = knexfile;
