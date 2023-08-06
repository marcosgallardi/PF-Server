const { Ticket } = require("../db");

const postTicket = async ({ idUser, idsCompleteOrder,totalPrice }) => {
  const newTicket = await Ticket.create({ idUser, idsCompleteOrder,totalPrice });
  console.log(idUser, idsCompleteOrder, "LLEGAN????????????????");
  console.log("ticket del NEWTICKET-------------------------------", newTicket);
  return newTicket;
};

module.exports = postTicket;
