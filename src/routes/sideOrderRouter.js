const { Router } = require("express");

const sideOrderRouter = Router();
const sideOrder = require("../Handlers/sideOrder");
const createSideOrder = require("../Handlers/createSideOrder");

sideOrderRouter.get("/", sideOrder);
sideOrderRouter.post("/", createSideOrder);

module.exports = sideOrderRouter;
