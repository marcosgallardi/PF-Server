const { Banner } = require("../db");

const getBanners = async () => {
  const banners = await Banner.findAll();
  if (banners.length > 0) return banners;
  else throw Error("No banners found");
};

module.exports = getBanners;
