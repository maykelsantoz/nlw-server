import express from "express";
import cors from "cors";
import path from "path";
import routes from "./routes";

import { errors } from "celebrate";
require("dotenv").config();

const app = express();

app.use(cors({credentials:true, origin: process.env.FRONTEND || 'http://localhost:3000'}));

// app.use(cors(), (req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers", 
//     "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//     );
//     if (req.method === 'OPTIONS') {
//       res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
//       return res.status(200).json({});
//     }
//   next();
// });

app.use(express.json());
app.use(routes);

//app.options("*", cors(options));

app.use("/uploads", express.static(path.resolve(__dirname, "..", "uploads")));

app.use(errors());

app.listen(process.env.PORT || 3333, () => {
  console.log("⚡ Server start")
});
