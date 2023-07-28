const getTicketByIdPedido = require("../Controllers/getTicketByIdPedido");

const findTicketByIdPedido = async (req, res) => {
  const { id } = req.params;
  try {
    const ticket = await getTicketByIdPedido(id);

    res.status(200).json(ticket);
  } catch (error) {
    res.status(200).json({ error: error.message });
  }
};

module.exports = findTicketByIdPedido;