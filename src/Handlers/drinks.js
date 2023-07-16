const getAllDrinks = require("../Controllers/getAllDrinks");

const drinks = async (req, res) => {
  try {
    const drinks = await getAllDrinks();
    res.status(200).json(drinks);
  } catch (error) {
    res.status(200).json({ error: error.message });
  }
};

module.exports = drinks;
