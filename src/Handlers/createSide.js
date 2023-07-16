const postSide = require("../Controllers/postSide");

const createSide = async (req, res) => {
  const { name, type, available, price } = req.body;

  try {
    // if (!name || !description || !releaseDate || !rating) {
    //   return res.status(400).json({ error: "Missing data" });
    // }

    const newSide = await postSide(name, type, available, price);

    return res.status(201).json(newSide);
  } catch (error) {
    return res.status(200).json({ error: error.message });
  }
};

module.exports = createSide;
