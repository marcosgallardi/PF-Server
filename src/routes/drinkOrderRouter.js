const { Router } = require("express");

const drinkOrderRouter = Router();
const drinkOrder = require("../Handlers/drinkOrder");
const createDrinkOrder = require("../Handlers/createDrinkOrder");

drinkOrderRouter.get("/", drinkOrder);
drinkOrderRouter.post("/", createDrinkOrder);

module.exports = drinkOrderRouter;
