const { Side } = require("../db");
const { Op } = require("sequelize");

const postSide = async ({ name, type, available, price, image }) => {
  const existingSide = await Side.findOne({
    where: {
      name: {
        [Op.iLike]: name,
      },
    },
  });

  if (existingSide) {
    throw new Error("el acompañamiento ya existe.");
  }
  const newSide = await Side.create({
    name,
    type,
    available,
    price,
    image,
  });
  //   if (!name || !description || !releaseDate || !rating || !genres || !platforms) {
  //     throw new Error("Todos los campos son requeridos.");
  //   }

  return newSide;
};

module.exports = postSide;
