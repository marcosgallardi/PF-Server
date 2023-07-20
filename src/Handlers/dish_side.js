const getAllDish_side = require("../Controllers/getAllDish_side");

const dish_side = async (req, res) => {
  try {
    const dish_side = await getAllDish_side();
    console.log(dish_side);
    res.status(200).json(dish_side);
  } catch (error) {
    res.status(200).json({ error: error.message });
  }
};

module.exports = dish_side;
