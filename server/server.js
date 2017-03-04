const express = require("express");
const settings = require("./settings.json");
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;

const app = express();
const quotesCollection = "qoutes";
let db;

MongoClient.connect("mongodb://demouser:Alligator3@ds115870.mlab.com:15870/express-mongo-node-demo", (err, database) => {
	if (err) {
		console.log("Database error occured", err);
		return;
	}

	db = database;
	app.listen(settings.port, () => {
		console.log("Listening on port", settings.port);
	});
});

app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
	// res.sendFile(__dirname + "/frontend/index.html");
	const cursor = db.collection(quotesCollection).find();
	cursor.toArray((err, results) => {
		console.log(results);
		console.log(cursor);
		res.send(results);
	});
});

app.post(`/${quotesCollection}`, (req, res) => {
	db.collection(quotesCollection).save(req.body, (err, result) => {
		if (err) {
			console.log("Database error occured", err);
			return;
		}
		console.log("Saved to database", result);
		res.redirect("/");
	});
});
