const { Router } = require("express");

const sideOrderRouter = Router();
const sideOrder = require("../Handlers/sideOrder");

sideOrderRouter.get("/", sideOrder);

module.exports = sideOrderRouter;
