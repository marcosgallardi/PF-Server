const getAllDishes = require("../Controllers/getAllDishes");
const searchByName = require("../Controllers/searchByName");

const dishes = async (req, res) => {
  const name = req.query;
  if (name) {
    try {
      const dishes = await searchByName(name);
      res.status(200).json(dishes);
    } catch (error) {
      res.status(200).json({ error: error.message });
    }
  } else
    try {
      const dishes = await getAllDishes();
      res.status(200).json(dishes);
    } catch (error) {
      res.status(200).json({ error: error.message });
    }
};

module.exports = dishes;
