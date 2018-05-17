const express = require("express");
const bodyParser = require("body-parser");

var PORT = process.env.PORT || 8080;

var app = express();

// app.use(express.static("public"));

var path = require("path");

app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");
///this needs to be fixed
const routes = require("./controllers/burgerControl.js");

app.use(routes);


app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});