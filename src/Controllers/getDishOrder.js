const { DishOrder } = require("../db");

const getDishOrder = async () => {
  const dishOrder = await DishOrder.findAll();

  if (dishOrder.length > 0) return dishOrder;
  else throw Error("No DishOrder found");
};

module.exports = getDishOrder;
