const postDrink = require("../Controllers/postDrink");
const uploadImage = require('../config/cloudinary');
const cleaner = require('../config/cleaner');
const createDrink = async (req, res) => {
  const { name, volume, type, alcohol, stock, price } = req.body;

  try {
    // if (!name || !description || !releaseDate || !rating) {
    //   return res.status(400).json({ error: "Missing data" });
    // }
    const result = await uploadImage(req.file.image.tempFilePath);
    const image = result.secure_url;

    if(image) {
      cleaner()
    }

    const newDrink = await postDrink(name, volume, type, alcohol, stock, price,image);

    return res.status(201).json(newDrink);
  } catch (error) {
    return res.status(200).json({ error: error.message });
  }
};

module.exports = createDrink;
