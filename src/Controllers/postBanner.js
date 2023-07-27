const { Banner } = require("../db");
const { Op } = require("sequelize");

const postBanner = async ({ name, disabled, image }) => {
  const existingBanner = await Banner.findOne({
    where: {
      name: {
        [Op.iLike]: name,
      },
    },
  });
  console.log("image de controller", image);
  if (existingBanner) {
    throw new Error("El nombre del banner ya existe.");
  }
  const newBanner = await Banner.create({
    name,
    disabled,
    image,
  });

  return newBanner;
};

module.exports = postBanner;
