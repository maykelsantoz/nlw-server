"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var knex_1 = __importDefault(require("knex"));
require("dotenv/config");
// const connection = knex({
//   client: 'sqlite3',
//   connection: {
//     filename: path.resolve(__dirname, 'database.sqlite'),
//   },
//   useNullAsDefault: true,
// });
var connection = knex_1.default({
    client: 'pg',
    connection: process.env.DATABASE_URL,
});
exports.default = connection;
