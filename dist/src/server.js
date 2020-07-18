"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var path_1 = __importDefault(require("path"));
var routes_1 = __importDefault(require("./routes"));
var celebrate_1 = require("celebrate");
//require("dotenv").config();
require("dotenv/config");
var enforce = require('express-sslify');
var app = express_1.default();
app.use(enforce.HTTPS({ trustProtoHeader: true }));
app.use(cors_1.default());
app.use(express_1.default.json());
app.use(routes_1.default);
app.use("/uploads", express_1.default.static(path_1.default.resolve(__dirname, "..", "uploads")));
app.use(celebrate_1.errors());
app.listen(process.env.PORT || 3333, function () {
    console.log("⚡ Server start");
});
