const { DrinkOrder } = require("../db");
const { Op } = require("sequelize");

const postDrinkOrder = async ({ userId, drinkId, quantity, unitaryPrice, totalPrice }) => {
  const newDrinkOrder = await DrinkOrder.create({ userId, drinkId, quantity, unitaryPrice, totalPrice });

  return newDrinkOrder;
};

module.exports = postDrinkOrder;
