const express = require("express");

const IdeasController = require("./controllers/IdeasController");
const HomeController = require("./controllers/HomeController");

const routes = express.Router();

routes.get("/", HomeController.SelectAllIdeas);

routes.get("/ideas", IdeasController.SelectReversedIdeas);
routes.post("/new/idea", IdeasController.CreateNewIdea);

module.exports = routes;