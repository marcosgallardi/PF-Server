const { Ticket } = require("../db");

const ticketByUserId = async (id) => {
  const ticketsById = await Ticket.findAll({
    where: {
      idUser: id,
    },
  });
  if (ticketsById.length === 0) {
    return "No hay tickets asociados a este usuario";
  }

  return ticketsById;
};

module.exports = ticketByUserId;
