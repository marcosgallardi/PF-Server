const { Router } = require("express");
const findTicketByIdPedido = require("../Handlers/findTicketByIdPedido");
const getTicket = require("../Handlers/getTicket");
const getTicketByUserId = require("../Handlers/getTicketByUserId");

const ticketRouter = Router();

ticketRouter.get("/", getTicket);

ticketRouter.get('/:id',findTicketByIdPedido);

ticketRouter.get("/user/:id", getTicketByUserId);

module.exports = ticketRouter;
