const { DesertOrder } = require("../db");
const { Op } = require("sequelize");

const postDesertOrder = async ({ userId, desertId, quantity, unitaryPrice, totalPrice }) => {
  const newDesertOrder = await DesertOrder.create({ userId, desertId, quantity, unitaryPrice, totalPrice });

  return newDesertOrder.id;
};

module.exports = postDesertOrder;
