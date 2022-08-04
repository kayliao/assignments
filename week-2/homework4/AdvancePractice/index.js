const express = require("express");
const cookie_parser = require("cookie-parser");
const body_parser = require("body-parser");

const app = express();
app.use(cookie_parser());
app.use(body_parser.urlencoded({ extended: false }));

app.set("view engine", "pug");

/*
by using get query string in url.
can only use url query string by get method.
get method send message by query
post method send message by body
*/

app.get("/myName", (request, response) => {
	const name = request.cookies.username;
	response.render("index", { name });
});

app.get("/trackName", (request, response) => {
	const name = request.query.username;
	response.cookie("username", name);
	response.redirect("/myName");
});

/*
by using post -> only request.body
(if it's get method -> sending data in url)
*/

// app.get("/myName", (request, response) => {
// 	const name = request.cookies.username;
// 	if (name) {
// 		response.render("index", { name });
// 	} else {
// 		response.redirect("/trackName");
// 	}
// });

// app.get("/trackName", (request, response) => {
// 	const name = request.cookies.username;
// 	if (name) {
// 		response.redirect("/myName");
// 	} else {
// 		response.render("index");
// 	}
// });

// app.post("/trackName", (request, response) => {
// 	response.cookie("username", request.body.username);
// 	response.redirect("/myName");
// });

app.listen(3000);
