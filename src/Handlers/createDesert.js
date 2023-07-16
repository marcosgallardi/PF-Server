const postDesert = require("../Controllers/postDesert");
const uploadImage = require('../config/cloudinary');
const cleaner = require('../config/cleaner');

const createDesert = async (req, res) => {
  const { name, stock, price } = req.body;

  try {
    // if (!name || !description || !releaseDate || !rating) {
    //   return res.status(400).json({ error: "Missing data" });
    // }
    const result = await uploadImage(req.file.image.tempFilePath);
    const image = result.secure_url;

    if(image) {
      cleaner()
    }

    const newDesert = await postDesert(name, stock, price,image);

    return res.status(201).json(newDesert);
  } catch (error) {
    return res.status(200).json({ error: error.message });
  }
};

module.exports = createDesert;
