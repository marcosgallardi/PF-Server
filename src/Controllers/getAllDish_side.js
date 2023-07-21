const { Dish_side, Dish, Side } = require("../db");

const dish_side = async () => {
  const dish_side = await Dish_side.findAll();
  console.log(dish_side);

  if (dish_side.length > 0) return dish_side;
  else throw Error("no hay platos con acompañamientos");
};

module.exports = dish_side;
