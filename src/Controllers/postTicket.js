const { Ticket } = require("../db");

const postTicket = async ({ idUser, idsCompleteOrder }) => {
  const newTicket = await Ticket.create({ idUser, idsCompleteOrder });

  console.log('ticket del postTicket-------------------------------',newTicket)
  return newTicket;
};

module.exports = postTicket;
