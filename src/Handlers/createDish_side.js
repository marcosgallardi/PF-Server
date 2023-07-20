const postDish_side = require("../Controllers/postDish_side");

const createDish_side = async (req, res) => {
  const { dishId, sideId } = req.body;

  try {
    const dish_side = { dishId, sideId };
    const newDish_side = await postDish_side(dish_side);
    //devuelvo el id que espera el order
    return res.status(201).json({ idDS: newDish_side.id });
  } catch (error) {
    return res.status(200).json({ error: error.message });
  }
};

module.exports = createDish_side;
