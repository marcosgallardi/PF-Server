const getDishSideOrder = require("../Controllers/getDishSideOrder");

const dishSideOrder = async (req, res) => {
  try {
    const dishSideOrder = await getDishSideOrder();

    res.status(200).json(dishSideOrder);
  } catch (error) {
    res.status(200).json({ error: error.message });
  }
};

module.exports = dishSideOrder;
