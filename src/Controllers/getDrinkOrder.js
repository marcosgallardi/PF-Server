const { DrinkOrder } = require("../db");

const getDrinkOrder = async () => {
  const drinkOrder = await DrinkOrder.findAll();

  if (drinkOrder.length > 0) return drinkOrder;
  else throw Error("No drinkOrder found");
};

module.exports = getDrinkOrder;
