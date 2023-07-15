const postDrink = require("../Controllers/postDrink");

const createDrink = async (req, res) => {
  const { name, volume, type, alcohol, stock, price } = req.body;

  try {
    // if (!name || !description || !releaseDate || !rating) {
    //   return res.status(400).json({ error: "Missing data" });
    // }
    const newDrink = await postDrink(name, volume, type, alcohol, stock, price);

    return res.status(201).json(newDrink);
  } catch (error) {
    return res.status(200).json({ error: error.message });
  }
};

module.exports = createDrink;
