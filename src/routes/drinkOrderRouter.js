const { Router } = require("express");

const drinkOrderRouter = Router();
const drinkOrder = require("../Handlers/drinkOrder");

drinkOrderRouter.get("/", drinkOrder);

module.exports = drinkOrderRouter;
