const { Ticket } = require("../db");

const postTicket = async ({ idUser, idsCompleteOrder }) => {
  const newTicket = await Ticket.create({ idUser, idsCompleteOrder });
  console.log(idUser, idsCompleteOrder, "LLEGAN????????????????");
  console.log("ticket del NEWTICKET-------------------------------", newTicket);
  return newTicket;
};

module.exports = postTicket;
