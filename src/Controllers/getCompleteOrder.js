const { CompleteOrder, DrinkOrder } = require("../db");
const getByIdOrders = require("../Controllers/getByIdOrders");

const getCompleteOrder = async () => {
  const completeOrder = await CompleteOrder.findAll();

  if (completeOrder.length > 0) return completeOrder;
  else throw Error("No completeOrder found");
};

module.exports = getCompleteOrder;
