const getAllDishes = require("../Controllers/getAllDishes");

const dishes = async (req, res) => {
  try {
    const dishes = await getAllDishes();
    res.status(200).json(dishes);
  } catch (error) {
    res.status(200).json({ error: error.message });
  }
};

module.exports = dishes;
