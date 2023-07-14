const { Dish } = require("../db");

const getAllDishes = async () => {
  const dishes = await Dish.findAll();
  if (dishes.length > 0) return dishes;
  else throw Error("No dishes found");
};

module.exports = getAllDishes;
