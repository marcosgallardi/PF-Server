const pedidoUdate = require("../Controllers/pedidoUdate");
const { Ticket } = require("../db");

const updateTicketHandler = async (req, res) => {
  try {
    const { idPedido } = req.params;
    const { status } = req.body;

    // console.log("HD", idPedido, status);

    const ticketUpdate = await pedidoUdate(idPedido, status);

    res.status(200).json(`el ticket ${idPedido} ha sido actualizado a ${status}`);
  } catch (error) {
    res.status(200).json({ error: error.message });
  }
};
module.exports = updateTicketHandler;
