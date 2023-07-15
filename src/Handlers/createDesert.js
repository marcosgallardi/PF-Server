const postDesert = require("../Controllers/postDesert");

const createDesert = async (req, res) => {
  const { name, stock, price } = req.body;

  try {
    // if (!name || !description || !releaseDate || !rating) {
    //   return res.status(400).json({ error: "Missing data" });
    // }
    const newDesert = await postDesert(name, stock, price);

    return res.status(201).json(newDesert);
  } catch (error) {
    return res.status(200).json({ error: error.message });
  }
};

module.exports = createDesert;
