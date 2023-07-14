const { Router } = require("express");
const createDish = require("../Handlers/createDish");
const dishRouter = Router();

dishRouter.get("/", (req, res) => {
  res.status(200).send("obtengo dishes");
});

dishRouter.get("/:id", (req, res) => {
  res.status(200).send("obtengo el dish de id ");
});

dishRouter.post("/", createDish);

module.exports = dishRouter;
