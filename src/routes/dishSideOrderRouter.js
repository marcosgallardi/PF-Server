const { Router } = require("express");

const dishSideOrderRouter = Router();
const dishSideOrder = require("../Handlers/dishSideOrder");
const createDish_side = require("../Handlers/createDish_side");

dishSideOrderRouter.get("/", dishSideOrder);
dishSideOrderRouter.post("/", createDish_side);

module.exports = dishSideOrderRouter;
