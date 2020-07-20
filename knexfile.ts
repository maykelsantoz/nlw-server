import path from 'path'
import 'dotenv/config'

module.exports = {
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
  }
}
