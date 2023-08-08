const { Router } = require("express");
const findTicketByIdPedido = require("../Handlers/findTicketByIdPedido");
const getTicket = require("../Handlers/getTicket");
const getTicketByUserId = require("../Handlers/getTicketByUserId");
const updateTicketHandler = require("../Handlers/updateTicketHandler");

const ticketRouter = Router();

ticketRouter.get("/", getTicket);

ticketRouter.get("/:id", findTicketByIdPedido);

ticketRouter.get("/user/:id", getTicketByUserId);

ticketRouter.put("/:idPedido", updateTicketHandler);

module.exports = ticketRouter;
