const { Router } = require("express");
const drinks = require("../Handlers/drinks");
const createDrink = require("../Handlers/createDrink");
const drinkRouter = Router();

drinkRouter.get("/", drinks);

drinkRouter.get("/:id", (req, res) => {
  res.status(200).send("obtengo el drink de id ");
});

drinkRouter.post("/", createDrink);

module.exports = drinkRouter;
