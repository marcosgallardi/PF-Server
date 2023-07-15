const { Drink } = require("../db");

const getAllDrinks = async () => {
  const drinks = await Drink.findAll();
  if (drinks.length > 0) return drinks;
  else throw Error("No drinks found");
};

module.exports = getAllDrinks;
