const postSide = require("../Controllers/postSide");
const uploadImage = require("../config/cloudinary");
const cleaner = require("../config/cleaner");
const createSide = async (req, res) => {
  const { name, type, available, price } = req.body;

  try {
    // if (!name || !description || !releaseDate || !rating) {
    //   return res.status(400).json({ error: "Missing data" });
    // }
    const result = await uploadImage(req.files.image.tempFilePath);
    const image = result.secure_url;
    if (req.files) {
      if (image) {
        cleaner();
      }
    } else image = null;
    const newSide = await postSide({ name, type, available, price, image });

    return res.status(201).json(newSide);
  } catch (error) {
    return res.status(200).json({ error: error.message });
  }
};

module.exports = createSide;
