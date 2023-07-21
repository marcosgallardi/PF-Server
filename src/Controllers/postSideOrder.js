const { SideOrder } = require("../db");
const { Op } = require("sequelize");

const postSideOrder = async ({ userId, sideId, quantity, unitaryPrice, totalPrice }) => {
  const newSideOrder = await SideOrder.create({ userId, sideId, quantity, unitaryPrice, totalPrice });

  return newSideOrder;
};

module.exports = postSideOrder;
