const { Router } = require("express");

const orderRouter = Router();

orderRouter.get("/", (req, res) => {
  res.status(200).send("obtengo orders");
});

orderRouter.get("/:id", (req, res) => {
  res.status(200).send("obtengo la order de id ");
});

orderRouter.post("/:id", (req, res) => {
  res.status(200).send("creo order");
});

module.exports = orderRouter;
