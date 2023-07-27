const { Banner } = require("../db");
const uploadImage = require("../config/cloudinary");
const cleaner = require("../config/cleaner");
const putBanner = async (id, name, disabled, imageFile) => {
  try {
    // Primero, obtenemos el banner existente por su ID
    const existingBanner = await Banner.findByPk(id);

    // Luego, actualizamos solo los campos que vienen en el body
    if (existingBanner) {
      if (name) {
        existingBanner.name = name;
      }

      if (disabled !== undefined) {
        existingBanner.disabled = disabled;
      }

      if (imageFile) {
        const result = await uploadImage(imageFile.tempFilePath);
        existingBanner.image = result.secure_url;
      }

      await existingBanner.save();

      return existingBanner;
    } else {
      throw new Error("Banner not found");
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = putBanner;
