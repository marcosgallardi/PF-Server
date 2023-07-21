const postDishOrder = require("../Controllers/postDishOrder");

const createDishOrder = async (req, res) => {
  const { userId, dishid, quantity, unitaryPrice, totalPrice } = req.body;

  try {
    const dishOrder = { userId, dishid, quantity, unitaryPrice, totalPrice };
    const newDishOrder = await postDishOrder(dishOrder);

    return res.status(201).json(newDishOrder);
  } catch (error) {
    return res.status(200).json({ error: error.message });
  }
};

module.exports = createDishOrder;
