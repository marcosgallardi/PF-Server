const postDish = require("../Controllers/postDish");

const createdDish = async (req, res) => {
  const {
    name,
    description,
    type,
    subtype,
    disable,
    available,
    calories,
    glutenfree,
    vegetarian,
    dailyspecial,
    price,
  } = req.body;

  try {
    // if (!name || !description || !releaseDate || !rating) {
    //   return res.status(400).json({ error: "Missing data" });
    // }
    const newDish = await postDish(
      name,
      description,
      type,
      subtype,
      disable,
      available,
      calories,
      glutenfree,
      vegetarian,
      dailyspecial,
      price
    );

    return res.status(201).json(newDish);
  } catch (error) {
    return res.status(200).json({ error: error.message });
  }
};

module.exports = createdDish;
