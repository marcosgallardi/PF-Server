const { Router } = require("express");

const dishSideOrderRouter = Router();
const dishSideOrder = require("../Handlers/dishSideOrder");

dishSideOrderRouter.get("/", dishSideOrder);

module.exports = dishSideOrderRouter;
