const postDish = require("../Controllers/postDish");
const uploadImage = require("../config/cloudinary");
const cleaner = require("../config/cleaner");

const createdDish = async (req, res) => {
  const {
    name,
    description,
    type,
    subtype,
    disabled,
    available,
    calories,
    glutenfree,
    vegetarian,
    dailyspecial,
    price,
  } = req.body;

  try {
    const result = await uploadImage(req.files.image.tempFilePath);
    const imageURL = result.secure_url;

    if (req.files) {
      if (imageURL) {
        cleaner();
      }
    } else imageURL = null;
    const newDish = {
      image: imageURL,
      name,
      description,
      type,
      subtype,
      disabled,
      available,
      calories,
      glutenfree,
      vegetarian,
      dailyspecial,
      price,
    };
    const newD = await postDish(newDish);

    return res.status(201).json(newD);
  } catch (error) {
    return res.status(200).json({ error: error.message });
  }
};
module.exports = createdDish;
