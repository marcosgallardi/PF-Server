const { Router } = require("express");

const createDish = require("../Handlers/createDish");
const dishes = require("../Handlers/dishes");
const dishRouter = Router();

dishRouter.post("/", createDish);
dishRouter.get("/", dishes);

dishRouter.get("/:id", (req, res) => {
  res.status(200).send(`Obtener el plato con ID ${req.params.id}`);
});

module.exports = dishRouter;
