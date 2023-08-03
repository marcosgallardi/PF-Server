const getAllTicket = require("../Controllers/getAllTicket");
const getTicketByIdPedido = require("../Controllers/getTicketByIdPedido");
const getById = require("../Controllers/getById");
const getTicket = async (req, res) => {
  try {
    const respuesta = [];
    const tickets = await getAllTicket();

    for (i = 0; i < tickets.length; i++) {
      const user = await getById(tickets[i].idUser);
      const ticket = {
        order: tickets[i].idPedido,
        user: {
          name: user.name,
          email: user.email,
        },
        idsCompleteOrder: tickets[i].idsCompleteOrder,
        status: tickets[i].status,
        date: tickets[i].createdAt,
      };
      respuesta.push(ticket);

      console.log(ticket);
    }

    res.status(200).json(respuesta);
  } catch (error) {
    res.status(200).json({ error: error.message });
  }
};

module.exports = getTicket;
