const postSideOrder = require("../Controllers/postSideOrder");

const createSideOrder = async (req, res) => {
  const { userId, sideId, quantity, unitaryPrice, totalPrice } = req.body;
  // console.log(sideId);

  try {
    const sideOrder = { userId, sideId, quantity, unitaryPrice, totalPrice };
    const newSideOrder = await postSideOrder(sideOrder);

    return res.status(201).json(newSideOrder);
  } catch (error) {
    return res.status(200).json({ error: error.message });
  }
};

module.exports = createSideOrder;
