const { DrinkOrder } = require("../db");
const getByUserTime = require("../Controllers/getByUserTime");
const getDrinkOrder = async () => {
  const drinkOrder = await DrinkOrder.findAll();
  const algo = await getByUserTime("05a284e7-f697-4e46-a5a0-c745b32356ce", "21:27");
  console.log(algo);
  if (drinkOrder.length > 0) return drinkOrder;
  else throw Error("No drinkOrder found");
};

module.exports = getDrinkOrder;
