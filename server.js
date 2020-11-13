// Install dependencies
const express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

const port = process.env.PORT || 3000;
const app = express();


// Static content
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

// Set Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.listen(port);
