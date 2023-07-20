const { Dish_side } = require("../db");
const { Op } = require("sequelize");

//la validacion NO deberia ser con el name, sino con el email
const postDish_side = async ({ dishId, sideId }) => {
  console.log(dishId, "dish");
  const newDish_side = await Dish_side.create({
    dishId,
    sideId,
  });
  //   if (!name || !description || !releaseDate || !rating || !genres || !platforms) {
  //     throw new Error("Todos los campos son requeridos.");
  //   }

  return newDish_side;
};

module.exports = postDish_side;
