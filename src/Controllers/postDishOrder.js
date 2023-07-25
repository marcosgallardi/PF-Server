const { DishOrder } = require("../db");
const { Op } = require("sequelize");

const postDishOrder = async ({ userId, dishid, quantity, unitaryPrice, totalPrice }) => {
  const newDishOrder = await DishOrder.create({ userId, dishid, quantity, unitaryPrice, totalPrice });

  return newDishOrder.id;
};

module.exports = postDishOrder;
