const getDishOrder = require("../Controllers/getDishOrder");

const dishOrder = async (req, res) => {
  try {
    const dishOrder = await getDishOrder();

    res.status(200).json(dishOrder);
  } catch (error) {
    res.status(200).json({ error: error.message });
  }
};

module.exports = dishOrder;
