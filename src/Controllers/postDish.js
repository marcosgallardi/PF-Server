const { Dish } = require("../db");
const { Op } = require("sequelize");

const postDish = async (
  name,
  description,
  type,
  subtype,
  disable,
  available,
  calories,
  glutenfree,
  vegetarian,
  dailyspecial,
  price,
  image
) => {
  const existingDish = await Dish.findOne({
    where: {
      name: {
        [Op.iLike]: name,
      },
    },
  });

  if (existingDish) {
    throw new Error("El nombre del plato ya existe.");
  }
  const newDish = await Dish.create({
    name,
    description,
    type,
    subtype,
    disable,
    available,
    calories,
    glutenfree,
    vegetarian,
    dailyspecial,
    price,
    image
  });
  //   if (!name || !description || !releaseDate || !rating || !genres || !platforms) {
  //     throw new Error("Todos los campos son requeridos.");
  //   }

  return newDish;
};

module.exports = postDish;
