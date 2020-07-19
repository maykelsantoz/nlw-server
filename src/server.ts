import express from "express";
//import { Request, Response, NextFunction } from "express";
import cors from "cors";
import path from "path";
import routes from "./routes";

import { errors } from "celebrate";
require("dotenv").config();
//import 'dotenv/config'

//const enforce = require('express-sslify');

//const xhr = new XMLHttpRequest();

//xhr.open('GET',url, true);

const app = express();


const http_request = new XMLHTTPRequest();
http_request.onreadystatechange = function () { 
  if (this.readyState === 4 && this.status === 200) {
    console.log(http_request.responseText)
    
  } else {
    console.log("error")
  }
 };
http_request.open("POST", "https://cors-anywhere.herokuapp.com/https://xenodochial-curie-593783.netlify.app");
http_request.withCredentials = true;
http_request.setRequestHeader("Content-Type", "application/json");
http_request.send({ 'request': "authentication token" });

// const options:cors.CorsOptions = {
//   allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
//   credentials: true,
//   methods: "POST",
//   origin: "*",
//   preflightContinue: false,
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// };

//app.use(cors(http_request));

//app.options("*", cors(options));

//app.use(enforce.HTTPS({ trustProtoHeader: true }));

// app.use(cors(), (req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   next();
// });

// app.use(cors({ origin: "https://xenodochial-curie-593783.netlify.app"}), (req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "GET,PUT,POST");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

// options for cors midddleware

const corsOptions = {
  origin: 'https://xenodochial-curie-593783.netlify.app'
}

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://cors-anywhere.herokuapp.com/https://xenodochial-curie-593783.netlify.app");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//https://cors-anywhere.herokuapp.com/

// app.use(
//   cors({
//     origin: "https://xenodochial-curie-593783.netlify.app", // restrict calls to those this address
//     methods: "POST" // only allow GET requests
//   })
// );

//app.use(cors({ origin: "https://xenodochial-curie-593783.netlify.app"}));

app.use(express.json());

app.use(routes, cors(corsOptions));

//app.options("*", cors(options));

app.use("/uploads", express.static(path.resolve(__dirname, "..", "uploads")));

app.use(errors());

app.listen(process.env.PORT || 3333, () => {
  console.log("⚡ Server start")
});
