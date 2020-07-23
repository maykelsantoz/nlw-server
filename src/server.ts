import express from "express";
import cors from "cors";
import path from "path";
import routes from "./routes";

import { errors } from "celebrate";
require("dotenv").config();

const app = express();

app.use(express.json());

const enforce = require("express-sslify");

app.use(enforce.HTTPS({ trustProtoHeader: true }));
// var corsOptions = {
//   origin: process.env.FRONTEND,
//   optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
// };

fetch(`${process.env.FRONTEND}`, {
  method: "POST",
  mode: "cors", // pode ser cors ou basic(default)
  redirect: "follow",
  headers: new Headers({
    "Content-Type": "application/json",
  }),
})
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log("Request failed", error);
  });

app.use(cors());
app.use(routes);

//app.options('*', cors(options));

app.use("/uploads", express.static(path.resolve(__dirname, "..", "uploads")));

app.use(errors());

app.listen(process.env.PORT || 3333, () => {
  console.log("⚡ Server start");
});
