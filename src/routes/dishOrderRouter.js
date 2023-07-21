const { Router } = require("express");

const dishOrderRouter = Router();
const dishOrder = require("../Handlers/dishOrder");

dishOrderRouter.get("/", dishOrder);

module.exports = dishOrderRouter;
