const express = require("express");
const app = express();
const body = require("body-parser");
const route = require("./route/routes.js");

app.use(body.json());
// app.use(body.urlencoded({ extended: true }));

app.use("/", route);

app.listen(3000);
