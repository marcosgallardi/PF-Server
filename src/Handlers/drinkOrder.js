const getDrinkOrder = require("../Controllers/getDrinkOrder");

const drinkOrder = async (req, res) => {
  try {
    const drinkOrder = await getDrinkOrder();

    res.status(200).json(drinkOrder);
  } catch (error) {
    res.status(200).json({ error: error.message });
  }
};

module.exports = drinkOrder;
