const { Banner } = require("../db");

const deleteBanner = async (req, res) => {
  const id = req.params;
  try {
    const banner = await Banner.findByPk(id);

    if (!banner) {
      return res.status(201).json({ error: "Banner no encontrado" });
    }

    await banner.destroy();

    return res.status(204).send("Banner borrado exitosamente");
  } catch (error) {
    console.error("Error deleting banner:", error);
    return res.status(500).json({ error: "Could not delete banner" });
  }
};

module.exports = deleteBanner;
