import express from "express";
import cors from "cors";
import path from "path";
import routes from "./routes";

import { errors } from "celebrate";
require("dotenv").config();

const app = express();

fetch("http://nlw01-web.herokuapp.com/create-point", {
  headers: {
    accepts: "application/json",
  },
})
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((json) => console.log(json))
  .catch((a) => {
    console.log(a);
  });

// var corsOptions = {
//   origin: process.env.FRONTEND,
//   optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
// };

app.use(express.json());
app.use(cors());
app.use(routes);

//app.options('*', cors(options));

app.use("/uploads", express.static(path.resolve(__dirname, "..", "uploads")));

app.use(errors());

app.listen(process.env.PORT || 3333, () => {
  console.log("⚡ Server start");
});
