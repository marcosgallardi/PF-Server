const { Desert } = require("../db");
const { Op } = require("sequelize");

const postDish = async ({ name, stock, price, image }) => {
  const existingDesert = await Desert.findOne({
    where: {
      name: {
        [Op.iLike]: name,
      },
    },
  });
  console.log("image de controller", image);
  if (existingDesert) {
    throw new Error("El nombre del postre ya existe.");
  }
  const newDesert = await Desert.create({
    name,
    stock,
    price,
    image,
  });
 /*  console.log(newDesert); */
  return newDesert;
};

module.exports = postDish;
