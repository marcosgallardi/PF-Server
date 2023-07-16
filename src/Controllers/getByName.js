const { Dish, Drink, Desert } = require("../db");
const { Op } = require("sequelize");

let paquete = [];
const getByName = async (name) => {
  const drinks = await Drink.findAll({
    where: {
      name: {
        [Op.iLike]: `%${name}%`,
      },
    },
  });
  const dishes = await Dish.findAll({
    where: {
      name: {
        [Op.iLike]: `%${name}%`,
      },
    },
  });
  const deserts = await Desert.findAll({
    where: {
      name: {
        [Op.iLike]: `%${name}%`,
      },
    },
  });
  paquete = [...dishes, ...drinks, ...deserts];
  if (paquete.length < 1) {
    throw Error("No se encuentran productos");
  } else {
    return paquete;
  }
};

module.exports = getByName;
