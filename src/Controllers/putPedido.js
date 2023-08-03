const { Ticket } = require("../db");

const ticketUpdate = async (idPedido, status) => {
  const ticket = await Ticket.findById(idPedido);
  if (!ticket) {
    throw new Error("Ticket no encontrado");
  }

  ticket.status = status;
  await ticket.save();
  return ticket;
}; //

module.exports = ticketUpdate;
