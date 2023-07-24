const { Router } = require("express");
const searchByName = require("../Handlers/searchByName");

const nameRouter = Router();

nameRouter.get("/", searchByName);

module.exports = nameRouter;
