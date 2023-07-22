const postDrinkOrder = require("../Controllers/postDrinkOrder");

const createDrinkOrder = async (req, res) => {
  const { userId, drinkId, quantity, unitaryPrice, totalPrice } = req.body;

  try {
    const drinkOrder = { userId, drinkId, quantity, unitaryPrice, totalPrice };
    const newDrinkOrder = await postDrinkOrder(drinkOrder);

    return res.status(201).json(newDrinkOrder);
  } catch (error) {
    return res.status(200).json({ error: error.message });
  }
};

module.exports = createDrinkOrder;
