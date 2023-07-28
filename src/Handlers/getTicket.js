const getAllTicket = require("../Controllers/getAllTicket");

const getTicket = async (req, res) => {
  try {
    const tickets = await getAllTicket();

    res.status(200).json(tickets);
  } catch (error) {
    res.status(200).json({ error: error.message });
  }
};

module.exports = getTicket;