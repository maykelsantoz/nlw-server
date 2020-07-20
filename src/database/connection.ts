import knex from "knex";
import path from "path";
import "dotenv/config";

//const config = require('../../knexfile.ts');
const configuration = require("../../knexfile");

const config =
  process.env.NODE_ENV === "production"
    ? configuration.production
    : configuration.development;

//const proc = process.env.NODE_ENV || 'development';

const connection = knex(config);

export default connection;
