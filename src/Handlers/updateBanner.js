const putBanner = require("../Controllers/putBanner");

const updateBanner = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, disabled } = req.body;

    let imageFile = null;
    if (req.files && req.files.image) {
      imageFile = req.files.image;
    }

    const updatedBanner = await putBanner(id, name, disabled, imageFile);

    res.status(200).json(updatedBanner);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = updateBanner;
