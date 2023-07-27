const postBanner = require("../Controllers/postBanner");
const uploadImage = require("../config/cloudinary");
const cleaner = require("../config/cleaner");

const createBanner = async (req, res) => {
  const { name, disabled } = req.body;

  try {
    const result = await uploadImage(req.files.image.tempFilePath);
    const imageURL = result.secure_url;

    if (req.files) {
      if (imageURL) {
        cleaner();
      }
    } else imageURL = null;
    const banner = { name, disabled, image: imageURL };
    const newBanner = await postBanner(banner);

    return res.status(201).json(newBanner);
  } catch (error) {
    return res.status(200).json({ error: error.message });
  }
};

module.exports = createBanner;
