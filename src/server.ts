import express from "express";
import cors from "cors";
import path from "path";
import routes from "./routes";

import { errors } from "celebrate";
require("dotenv").config();
import 'dotenv/config'

const enforce = require('express-sslify');

const app = express();

const corsOptions = {
  origin: "https://xenodochial-curie-593783.netlify.app",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(enforce.HTTPS({ trustProtoHeader: true }));

app.use(cors(corsOptions));

app.options('*', cors()) // include before other routes

app.use(express.json());
app.use(routes);

app.use("/uploads", express.static(path.resolve(__dirname, "..", "uploads")));

app.use(errors());

app.listen(process.env.PORT || 3333, () => {
  console.log("⚡ Server start")
});
