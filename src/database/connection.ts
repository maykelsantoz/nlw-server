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

//import mysqlConfig from '../../knexfile';

//console.log(`Dev ${process.env.NODE_ENV}`)
// let ver = process.env.NODE_ENV;

//     console.log(ver)


// const teste = (() => {

//   if (ver === 'production') {
//     console.log(ver)
//   } else {
//     console.log(ver)
//   }
// });

//const knexConfig = mysqlConfig[process.env.NODE_ENV || 'development'];
//var knexConfig = mysqlConfig['development' || 'production'];
//console.log(`E a conexão é ${process.env.NODE_ENV}`)
//console.log(knexConfig)

//const connection = knex(client:'pg' );

//NODE_DEV=development

//const connection = knex({})

const proc = process.env.NODE_ENV || 'development';

//console.log(process.env.NODE_ENV)



const connection = knex(
proc,
)

export default connection;