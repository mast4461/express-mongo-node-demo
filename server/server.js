const express = require('express');
const settings = require('./settings.json');
const app = express();

app.listen(settings.port, function() {
  console.log("Listening on port", settings.port);
});