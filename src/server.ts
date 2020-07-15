import express from "express";
import cors from "cors";
import path from "path";
import routes from "./routes";

import { errors } from "celebrate";

const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use("/uploads", express.static(path.resolve(__dirname, "..", "uploads")));

app.use(errors());

app.listen(`${process.env.PORT}`, () => {
  console.log("⚡ Server online!");
});
