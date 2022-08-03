const express = require("express");
const cookie_parser = require("cookie-parser");
const body_parser = require("body-parser");

const app = express();
app.use(cookie_parser());
app.use(body_parser.urlencoded({ extended: false }));

app.set("view engine", "pug");

app.get("/myName", (request, response) => {
	const name = request.cookies.username;
	if (name) {
		response.render("index", { name });
	} else {
		response.redirect("/trackName");
	}
});

app.get("/trackName", (request, response) => {
	const name = request.cookies.username;
	if (name) {
		response.redirect("/myName");
	} else {
		response.render("index");
	}
});

app.post("/trackName", (request, response) => {
	response.cookie("username", request.body.username);
	response.redirect("/myName");
});

app.listen(3000);
