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


   if (ticket.status === "Entregado") {
      await mailFinishOrder(ticket);
   }
  await ticket.save();
 
  return ticket;
}; //

module.exports = pedidoUpdate;
