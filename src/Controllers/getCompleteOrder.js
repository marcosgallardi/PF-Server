const { CompleteOrder } = require("../db");

const getCompleteOrder = async () => {
  const completeOrder = await CompleteOrder.findAll();

  if (completeOrder.length > 0) return completeOrder;
  else throw Error("No completeOrder found");
};

module.exports = getCompleteOrder;
