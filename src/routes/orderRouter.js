const { Router } = require("express");
const getOrder = require("../Handlers/Orders");

const orderRouter = Router();

orderRouter.get("/", getOrder);

orderRouter.get("/:id", (req, res) => {
  res.status(200).send("obtengo la order de id ");
});

orderRouter.post("/:id", (req, res) => {
  res.status(200).send("creo order");
});

module.exports = orderRouter;
