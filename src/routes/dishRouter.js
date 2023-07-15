const { Router } = require("express");

const dishRouter = Router();
const createDish = require("../Handlers/createDish");
const dishes = require("../Handlers/dishes");

dishRouter.get("/", dishes);

dishRouter.get("/:id", (req, res) => {
  res.status(200).send(`Obtener el plato con ID ${req.params.id}`);
});

dishRouter.post("/", createDish);

module.exports = dishRouter;
