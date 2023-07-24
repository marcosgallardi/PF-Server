const { DishSideOrder } = require("../db");
const { Op } = require("sequelize");

const postDishSideOrder = async ({ userId, dishOrderId, sideOrderId, quantity, totalPrice }) => {
  const newDishSideOrder = await DishSideOrder.create({
    userId,
    dishOrderId,
    sideOrderId,
    quantity,

    totalPrice,
  });

  return newDishSideOrder.id;
};

module.exports = postDishSideOrder;
