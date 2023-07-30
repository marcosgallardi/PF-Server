const { Ticket } = require("../db");

const postTicket = async ({ idUser, idsCompleteOrder }) => {
  const newTicket = await Ticket.create({ idUser, idsCompleteOrder });

  return newTicket;
};

module.exports = postTicket;
