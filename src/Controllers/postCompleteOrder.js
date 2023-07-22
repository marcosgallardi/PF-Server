const { CompleteOrder } = require("../db");
const { Op } = require("sequelize");

const postCompleteOrder = async ({ drinks, deserts, dishSide, userId }) => {
  const newCompleteOrder = await CompleteOrder.create({
    drinks: drinks,
    deserts: deserts,
    dishSide: dishSide,
    userId: userId,
  });

  return newCompleteOrder;
};

module.exports = postCompleteOrder;
