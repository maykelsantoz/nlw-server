import express from "express";
//import { Request, Response, NextFunction } from "express";
import cors from "cors";
import path from "path";
import routes from "./routes";

import { errors } from "celebrate";
require("dotenv").config();
import 'dotenv/config'

const enforce = require('express-sslify');

const app = express();


app.use(enforce.HTTPS({ trustProtoHeader: true }));

app.use(cors({ origin: "https://xenodochial-curie-593783.netlify.app"}), (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//options for cors midddleware
// const options:cors.CorsOptions = {
//   allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
//   credentials: true,
//   methods: "POST",
//   origin: "*",
//   preflightContinue: false,
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// };

// app.use(cors(options));

// app.use((request: Request, response: Response, next: NextFunction) => {
//   res.header("Access-Control-Allow-Origin", "https://xenodochial-curie-593783.netlify.app");
//   res.header("Access-Control-Allow-Methods", "GET,PUT,POST");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

// app.use(
//   cors({
//     origin: "https://xenodochial-curie-593783.netlify.app", // restrict calls to those this address
//     methods: "POST" // only allow GET requests
//   })
// );

//app.use(cors({ origin: "https://xenodochial-curie-593783.netlify.app"}));

app.use(express.json());

app.use(routes);

//app.options("*", cors(options));

app.use("/uploads", express.static(path.resolve(__dirname, "..", "uploads")));

app.use(errors());

app.listen(process.env.PORT || 3333, () => {
  console.log("⚡ Server start")
});
