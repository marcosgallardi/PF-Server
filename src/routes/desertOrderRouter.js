const { Router } = require("express");

const desertOrderRouter = Router();
const desertOrder = require("../Handlers/desertOrder");

desertOrderRouter.get("/", desertOrder);

module.exports = desertOrderRouter;
