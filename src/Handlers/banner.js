const getBanners = require("../Controllers/getBanners");

const banners = async (req, res) => {
  try {
    const banners = await getBanners();
    res.status(200).json(banners);
  } catch (error) {
    res.status(200).json({ error: error.message });
  }
};

module.exports = banners;
