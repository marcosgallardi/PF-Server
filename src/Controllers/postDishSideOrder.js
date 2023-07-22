const { DishSideOrder } = require("../db");
const { Op } = require("sequelize");

const postDishSideOrder = async ({ userId, dishid, sideID, quantity, unitaryPrice, totalPrice }) => {
  const newSideOrder = await DishSideOrder.create({
    userId,
    dishid,
    sideID,
    quantity,
    unitaryPrice,
    totalPrice,
  });

  return newSideOrder;
};

module.exports = postDishSideOrder;
