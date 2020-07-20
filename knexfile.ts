import path from 'path'
require('dotenv').config();

const mysqlConfig = {
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: path.resolve(__dirname, 'src', 'database', 'migrations')

    },
    seeds: {
      directory: path.resolve(__dirname, 'src', 'database', 'seeds')
    }
    //useNullAsDefault: true,
  },

  development: {
    client: 'pg',
    connection: process.env.DATABASE_DEV,
    migrations: {
      directory: path.resolve(__dirname, 'src', 'database', 'migrations')

    },
    seeds: {
      directory: path.resolve(__dirname, 'src', 'database', 'seeds')
    }
    //useNullAsDefault: true,
  },

  
}

module.exports = mysqlConfig;
