"use strict";
exports.__esModule = true;
require('dotenv').config({ path: '.environment/.dev.env' });
var express = require("express");
var http = require("http");
var routes_1 = require("./src/routes/routes");
var cors = require("cors");
var app = express();
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
app.use(express.json({ limit: '100mb' }));
app.use('/', routes_1.router);
var port = process.env.PORT || 80;
http
    .createServer(app)
    .listen(port, function () {
    return console.log("Server is running on port ".concat(port));
});
