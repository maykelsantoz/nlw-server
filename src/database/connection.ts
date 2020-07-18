import knex from 'knex';
//import path from 'path';
import 'dotenv/config'

// const connection = knex({
//   client: 'sqlite3',
//   connection: {
//     filename: path.resolve(__dirname, 'database.sqlite'),
//   },
//   useNullAsDefault: true,
// });

const connection = knex({
  client: 'pg',
  connection: {
    host: String(process.env.DB_HOST),
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  }
})

export default connection;