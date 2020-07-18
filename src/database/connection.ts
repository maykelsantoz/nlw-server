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
  connection: process.env.DATABASE_URL
})

export default connection;