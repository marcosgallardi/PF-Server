const { Router } = require("express");

const dishOrderRouter = Router();
const dishOrder = require("../Handlers/dishOrder");
const createDishOrder = require("../Handlers/createDishOrder");

dishOrderRouter.get("/", dishOrder);
dishOrderRouter.post("/", createDishOrder);

module.exports = dishOrderRouter;
