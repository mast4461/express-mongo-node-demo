const express = require('express');
const settings = require('./settings.json');
const app = express();

app.listen(settings.port, function() {
  console.log("Listening on port", settings.port);
});

app.get("/", function (req, res) {
    res.send("<h1>Hello world</h1><h2>Second line!</h2>");
});
