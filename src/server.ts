import express from "express";
import cors from "cors";
import path from "path";
import routes from "./routes";

import { errors } from "celebrate";
require("dotenv").config();

const app = express();

var corsOptions = {
  origin: "http://nlw01-web.herokuapp.com/create-point",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(express.json());
app.use(cors(corsOptions));
app.use(routes);

//app.options('*', cors(options));

app.use("/uploads", express.static(path.resolve(__dirname, "..", "uploads")));

app.use(errors());

app.listen(process.env.PORT || 3333, () => {
  console.log("⚡ Server start");
});
