const { Router } = require("express");
const getOrder = require("../Handlers/Orders");
const createOrder = require("../Handlers/createOrder");
const orderRouter = Router();

orderRouter.get("/", getOrder);

orderRouter.post("/", createOrder);

orderRouter.post("/:id", (req, res) => {
  res.status(200).send("creo order");
});

module.exports = orderRouter;
