const { Ticket } = require("../db");

const getAllTicket = async () => {
  const tickets = await Ticket.findAll();
  if (tickets.length > 0) return tickets;
  else throw Error("there are no ticket in the database");
};

module.exports = getAllTicket;
