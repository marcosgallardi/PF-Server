const { SideOrder } = require("../db");
const getById = require('./getById');

const postSideOrder = async ({ userId, sideId, quantity, unitaryPrice, totalPrice }) => {
  const side = await getById(sideId);
  const sideName = side.name;
  const newSideOrder = await SideOrder.create({ userId, sideId,sideName, quantity, unitaryPrice, totalPrice });

  return newSideOrder.id;
};

module.exports = postSideOrder;
