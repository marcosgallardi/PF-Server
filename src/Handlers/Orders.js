const getAllOrders = require("../Controllers/getAllOrders");

const orders = async (req, res) => {
  try {
    const orders = await getAllOrders();

    res.status(200).json(orders);
  } catch (error) {
    res.status(200).json({ error: error.message });
  }
};

module.exports = orders;
