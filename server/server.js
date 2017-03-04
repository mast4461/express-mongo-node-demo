const express = require('express');
const settings = require('./settings.json');
const bodyParser = require("body-parser");
const app = express();
const MongoClient = require('mongodb').MongoClient
let db;

MongoClient.connect('mongodb://demouser:Alligator3@ds115870.mlab.com:15870/express-mongo-node-demo', (err, database) => {
	if (err) {
		console.log("Database error occured", err);
		return;
	}
	
	db = database;	
	app.listen(settings.port, function() {
  		console.log("Listening on port", settings.port);
	});
})

app.use(bodyParser.urlencoded({extended: true}));



app.get("/", function (req, res) {
    res.sendFile(__dirname + "/frontend/index.html");
});

app.post("/quotes", function (req, res) {
    console.log(req.body);
});
