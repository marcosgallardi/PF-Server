const { Ticket } = require("../db");
const mailFinishOrder = require("./mailFinishOrder");

const pedidoUpdate = async (idPedido, status) => {
  const ticket = await Ticket.findOne({
    where: { idPedido: idPedido },
  });

  console.log("ticket", ticket);
  if (!ticket) {
    throw new Error("Ticket no encontrado");
  }

  ticket.status = status;

 await mailFinishOrder(ticket);
  // if (ticket.status === "Entregado") {
  // }
  await ticket.save();
 
  return ticket;
}; //

module.exports = pedidoUpdate;
