const { Dish_side } = require("../db");

const dish_side = async () => {
  const dish_side = await Dish_side.findAll();
  if (dish_side.length > 0) return deserts;
  else throw Error("no hay platos con acompañamientos");
};

module.exports = dish_side;
