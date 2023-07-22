const { Router } = require("express");

const completeOrderRouter = Router();
const completeOrder = require("../Handlers/completeOrder");

completeOrderRouter.get("/", completeOrder);

module.exports = completeOrderRouter;
