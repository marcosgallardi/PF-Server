const postOrder = require("../Controllers/postOrder");

const createOrder = async (req, res) => {
  const { idUser, idDS, idDrink, quantity, idDesert } = req.body;

  try {
    const order = { idUser, idDS, idDrink, quantity, idDesert };
    const newOrder = await postOrder(order);

    return res.status(201).json(newOrder);
  } catch (error) {
    return res.status(200).json({ error: error.message });
  }
};

module.exports = createOrder;
