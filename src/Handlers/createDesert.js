const postDesert = require("../Controllers/postDesert");
const uploadImage = require("../config/cloudinary");
const cleaner = require("../config/cleaner");

const createDesert = async (req, res) => {
  const { name, stock, price } = req.body;

  try {
    const result = await uploadImage(req.files.image.tempFilePath);
    const image = result.secure_url;
    if (req.files) {
      if (image) {
        cleaner();
      }
    } else image = null;
    const newDesert = await postDesert(name, stock, price, image);

    return res.status(201).json(newDesert);
  } catch (error) {
    return res.status(200).json({ error: error.message });
  }
};

module.exports = createDesert;
