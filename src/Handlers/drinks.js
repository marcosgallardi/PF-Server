const getAllDrinks = require("../Controllers/getAllDrinks");
const getByName = require("../Controllers/getByName");
const drinks = async (req, res) => {
  const name = req.query;
  if (name) {
    try {
      const drinks = await getByName(name);
      res.status(200).json(drinks);
    } catch (error) {
      res.status(200).json({ error: error.message });
    }
  } else
    try {
      const drinks = await getAllDrinks();

      res.status(200).json(drinks);
    } catch (error) {
      res.status(200).json({ error: error.message });
    }
};

module.exports = drinks;
