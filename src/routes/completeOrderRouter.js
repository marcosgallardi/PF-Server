const { Router } = require("express");

const authenticateToken = require("../authMiddleware");



const completeOrderRouter = Router();
const completeOrder = require("../Handlers/completeOrder");
const createCompleteOrder = require("../Handlers/createCompleteOrder");

completeOrderRouter.get("/", completeOrder);

completeOrderRouter.post("/", createCompleteOrder);

module.exports = completeOrderRouter;
