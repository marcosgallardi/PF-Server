const { Router } = require("express");
const dish_side = require("../Handlers/dish_side");
const dish_sideRouter = Router();

dish_sideRouter.get("/", dish_side);

dish_sideRouter.get("/:id", (req, res) => {
  res.status(200).send("obtengo el dish_side de id ");
});

dish_sideRouter.post("/:id", (req, res) => {
  res.status(200).send("creo dish_side");
});

module.exports = dish_sideRouter;
