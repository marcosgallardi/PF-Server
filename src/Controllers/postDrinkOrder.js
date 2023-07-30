const { DrinkOrder } = require("../db");
const { Op } = require("sequelize");
const getById = require("./getById");

const postDrinkOrder = async ({ userId, drinkId, quantity, unitaryPrice, totalPrice }) => {
  const drink = await getById(drinkId);
  const drinkName = drink.name;

  const newDrinkOrder = await DrinkOrder.create({
    userId,
    drinkName,
    drinkId,
    quantity,
    unitaryPrice,
    totalPrice,
  });
  if (drink.stock > 0) {
    drink.stock -= 1;
    await drink.save();
  }
  return newDrinkOrder.id;
};

module.exports = postDrinkOrder;
