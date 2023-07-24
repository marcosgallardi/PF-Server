const { DrinkOrder } = require("../db");
const { Op } = require("sequelize");
const getById = require("./getById");

const postDrinkOrder = async ({ userId, drinkId, quantity, unitaryPrice, totalPrice }) => {
  const drink = await getById(drinkId);
  const drinkName = drink.name;
  const drinkPrice = drink.price;

  const newDrinkOrder = await DrinkOrder.create({
    userId,
    drinkName,
    drinkId,
    quantity,

    unitaryPrice,
    totalPrice,
  });

  return newDrinkOrder.id;
};

module.exports = postDrinkOrder;
