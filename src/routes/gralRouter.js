const { Router } = require("express");

const gralRouter = Router();
const searchByName = require("../Handlers/searchByName");


gralRouter.get("/", searchByName);


module.exports = gralRouter;