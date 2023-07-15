const { Drink } = require("../db");
const { Op } = require("sequelize");

const postDrink = async (name, volume, type, alcohol, stock, price) => {
  const existingDrink = await Drink.findOne({
    where: {
      name: {
        [Op.iLike]: name,
      },
    },
  });

  if (existingDrink) {
    throw new Error("la bebida ya existe.");
  }
  const newDrink = await Drink.create({
    name,
    volume,
    type,
    alcohol,
    stock,
    price,
  });
  //   if (!name || !description || !releaseDate || !rating || !genres || !platforms) {
  //     throw new Error("Todos los campos son requeridos.");
  //   }

  return newDrink;
};

module.exports = postDrink;
