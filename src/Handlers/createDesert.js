const postDesert = require("../Controllers/postDesert");
const uploadImage = require("../config/cloudinary");
const cleaner = require("../config/cleaner");

const createDesert = async (req, res) => {
  const { name, stock, price } = req.body;

  try {
    const result = await uploadImage(req.files.image.tempFilePath);
    const imageURL = result.secure_url;
    // console.log(imageURL);
    if (req.files) {
      if (imageURL) {
        cleaner();
      }
    } else imageURL = null;
    const desert = { name, stock, price, image: imageURL };
    const newDesert = await postDesert(desert);

    return res.status(201).json(newDesert);
  } catch (error) {
    return res.status(200).json({ error: error.message });
  }
};

module.exports = createDesert;
