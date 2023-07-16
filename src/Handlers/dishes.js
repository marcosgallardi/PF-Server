const getAllDishes = require("../Controllers/getAllDishes");
const getByName = require("../Controllers/getByName");

const dishes = async (req, res) => {
  const name = req.query;
  if (name) {
    try {
      const dishes = await getByName(name);
      res.status(200).json(dishes);
    } catch (error) {
      res.status(200).json({ error: error.message });
    }
  } else if (name === undefined) {
    try {
      const dishes = await getAllDishes();
      res.status(200).json(dishes);
    } catch (error) {
      res.status(200).json({ error: error.message });
    }
  }
};

module.exports = dishes;
