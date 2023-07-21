const { Router } = require("express");

const desertOrderRouter = Router();
const desertOrder = require("../Handlers/desertOrder");
const createDesertOrder = require("../Handlers/createDesertOrder");

desertOrderRouter.get("/", desertOrder);
desertOrderRouter.post("/", createDesertOrder);

module.exports = desertOrderRouter;
