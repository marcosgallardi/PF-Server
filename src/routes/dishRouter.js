const { Router } = require("express");

const dishRouter = Router();

dishRouter.get("/", (req, res) => {
  res.status(200).send("obtengo dishes");
});

dishRouter.get("/:id", (req, res) => {
  res.status(200).send("obtengo el dish de id ");
});

dishRouter.post("/:id", (req, res) => {
  res.status(200).send("creo dish");
});

module.exports = dishRouter;
