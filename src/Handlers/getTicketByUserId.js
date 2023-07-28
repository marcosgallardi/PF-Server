const ticketByUserId = require("../Controllers/ticketByUserId");

const getTicketByUserId = async (req, res) => {
  const { id } = req.params;
  try {
    const ticket = await ticketByUserId(id);

    res.status(200).json(ticket);
  } catch (error) {
    res.status(200).json({ error: error.message });
  }
};

module.exports = getTicketByUserId;
