const { Router } = require("express");

const drinkRouter = Router();

drinkRouter.get("/", (req, res) => {
  res.status(200).send("obtengo drink");
});

drinkRouter.get("/:id", (req, res) => {
  res.status(200).send("obtengo el drink de id ");
});

drinkRouter.post("/:id", (req, res) => {
  res.status(200).send("creo drink");
});

module.exports = drinkRouter;
