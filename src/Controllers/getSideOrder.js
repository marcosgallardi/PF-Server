const { SideOrder } = require("../db");

const getSideOrder = async () => {
  const sideOrder = await SideOrder.findAll();

  if (sideOrder.length > 0) return sideOrder;
  else throw Error("No sideOrder found");
};

module.exports = getSideOrder;
