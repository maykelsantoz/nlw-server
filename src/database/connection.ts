import knex from 'knex';
import path from 'path';
import 'dotenv/config'

// const connection = knex({
//   client: 'sqlite3',
//   connection: {
//     filename: path.resolve(__dirname, 'database.sqlite'),
//   },
//   useNullAsDefault: true,
// });

//const env = process.env.DATABASE_DEV;

//import {production, development}  from '../../knexfile.ts';
import mysqlConfig from '../../knexfile.ts';

console.log(`Dev ${process.env.NODE_ENV}`)

var knexConfig = mysqlConfig[`${process.env.NODE_ENV}` || `${process.env.NODE_ENV}`];
//var knexConfig = mysqlConfig['development' || 'production'];
//console.log(`E a conexão é ${process.env.NODE_ENV}`)
console.log(knexConfig)

const connection = knex(knexConfig);

//NODE_DEV=development

//const connection = knex({})


// const connection = knex({
//   client: 'pg',
//   connection: [process.env.NODE_ENV || 'development'],
//   //ssl: true,
//   //useNullAsDefault: true,
// })

export default connection;