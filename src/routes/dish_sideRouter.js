const { Router } = require("express");
const dish_side = require("../Handlers/dish_side");
const createDish_side = require("../Handlers/createDish_side");
const dish_sideRouter = Router();

dish_sideRouter.get("/", dish_side);

dish_sideRouter.post("/", createDish_side);

dish_sideRouter.post("/:id", (req, res) => {
  res.status(200).send("creo dish_side");
});

module.exports = dish_sideRouter;
