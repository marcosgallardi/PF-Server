const { Router } = require("express");

const gralRouter = Router();
const searchByName = require("../Handlers/searchByName");
const searchById = require('../Handlers/searchById')


gralRouter.get("/", searchByName);
gralRouter.get("/:id",searchById);

module.exports = gralRouter;