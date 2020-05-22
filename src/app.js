const express = require("express");
const compression = require("compression");

const app = express();

app.use(compression());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile("index.html");
});

module.exports = app;
