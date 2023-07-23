const postDishSideOrder = require("../Controllers/postDishSideOrder");

const createDishSideOrder = async (req, res) => {
  const { userId, dishid, sideID, unitaryPrice, quantity } = req.body;

  try {
    const dishSideOrder = { userId, sideID, dishid, unitaryPrice, quantity };
    const newSideDishOrder = await postDishSideOrder(dishSideOrder);
    //devuelvo el id que espera el order
    return res.status(201).json(newSideDishOrder);
  } catch (error) {
    return res.status(200).json({ error: error.message });
  }
};

module.exports = createDishSideOrder;
