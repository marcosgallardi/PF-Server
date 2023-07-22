const postDesertOrder = require("../Controllers/postDesertOrder");

const createDesertOrder = async (req, res) => {
  const { userId, desertId, quantity, unitaryPrice, totalPrice } = req.body;

  try {
    const desertOrder = { userId, desertId, quantity, unitaryPrice, totalPrice };
    const newDesertOrder = await postDesertOrder(desertOrder);

    return res.status(201).json(newDesertOrder);
  } catch (error) {
    return res.status(200).json({ error: error.message });
  }
};

module.exports = createDesertOrder;
