import path from 'path'
import 'dotenv/config'

module.exports = {
  client: 'pg',
  connection: {
    host: String(process.env.DB_HOST),
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  migrations: {
    directory: path.resolve(__dirname, 'src', 'database', 'migrations')

  },
  seeds: {
    directory: path.resolve(__dirname, 'src', 'database', 'seeds')

  }
}