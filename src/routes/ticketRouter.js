const { Router } = require("express");

const getTicket = require("../Handlers/getTicket");
const getTicketByUserId = require("../Handlers/getTicketByUserId");
const ticketRouter = Router();

ticketRouter.get("/", getTicket);

ticketRouter.get("/:id", getTicketByUserId);

module.exports = ticketRouter;
