const express = require("express");

const path = require("path");

const app = express();

const routes = require("./routes.js")

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));

app.use(express.static("public"));

app.use(express.urlencoded({
    extended: true
}));

app.use(routes);

app.listen(3000, () => console.log("Running at port 3000..."));