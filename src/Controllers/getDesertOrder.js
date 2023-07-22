const { DesertOrder } = require("../db");

const getDesertOrder = async () => {
  const desertOrder = await DesertOrder.findAll();

  if (desertOrder.length > 0) return desertOrder;
  else throw Error("No desertOrder found");
};

module.exports = getDesertOrder;
