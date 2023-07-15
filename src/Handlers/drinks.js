const getAlldrinks = require("../Controllers/getAlldrinks");

const drinks = async (req, res) => {
  try {
    const drinks = await getAlldrinks();
    res.status(200).json(drinks);
  } catch (error) {
    res.status(200).json({ error: error.message });
  }
};

module.exports = drinks;
