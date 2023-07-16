const postDish = require("../Controllers/postDish");
const uploadImage = require("../config/cloudinary");
const cleaner = require("../config/cleaner");

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
    const result = await uploadImage(req.files.image.tempFilePath);
    const image = result.secure_url;
    if (req.files) {
      if (image) {
        cleaner();
      }
    } else image = null;
    const newDish = await postDish(
      image,
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
