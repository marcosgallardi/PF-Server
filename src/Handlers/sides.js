const getAllSides = require("../Controllers/getAllSides");

const sides = async (req, res) => {
  try {
    const sides = await getAllSides();
    res.status(200).json(sides);
  } catch (error) {
    res.status(200).json({ error: error.message });
  }
};

module.exports = sides;
