const { DishSideOrder } = require("../db");

const getDishSideOrder = async () => {
  const dishSideOrder = await DishSideOrder.findAll();

  if (dishSideOrder.length > 0) return dishSideOrder;
  else throw Error("No dishSideOrder found");
};

module.exports = getDishSideOrder;
