const express = require('express');
const settings = require('./settings.json');
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.listen(settings.port, function() {
  console.log("Listening on port", settings.port);
});

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/frontend/index.html");
});

app.post("/quotes", function (req, res) {
    console.log(req.body);
});
