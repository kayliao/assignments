const express = require("express");
//const body_parser = require("body-parser");
//const cookie_parser = require("cookie-parser");

const app = express();
//app.use(body_parser.urlencoded({ extended: false }));
//app.use(cookie_parser());

app.get("/", (request, response) => {
	response.send("Hello, My Server!");
});

app.use(express.static("html_file"));

app.get("/getData", (req, res) => {
	let result;
	if (Object.keys(req.query).length === 0) result = "Lack of Parameter";
	else {
		if (isNaN(req.query.number)) {
			result = "Wrong Parameter";
		} else {
			result = ((1 + Number(req.query.number)) * Number(req.query.number)) / 2;
		}
	}
	res.send(`${result}`);
});

app.listen(3000);
