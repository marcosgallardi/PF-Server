const { Router } = require("express");

const dishSideOrderRouter = Router();
const dishSideOrder = require("../Handlers/dishSideOrder");
const createDishSideOrder = require("../Handlers/createDishSideOrder");

dishSideOrderRouter.get("/", dishSideOrder);
dishSideOrderRouter.post("/", createDishSideOrder);

module.exports = dishSideOrderRouter;
