const { User, CompleteOrder } = require("../db");
const { Op } = require("sequelize");

const getUserById = async (id) => {
  const orders = await CompleteOrder.findAll({
    where: {
      userId: id,
    },
  });

  const user = await User.findOne({
    where: {
      id: id,
    },
  });

  const ordersIds = orders.map((order) => order.dataValues.id);
  console.log("user", user);
  console.log("orders", ordersIds);
  user.dataValues.orders = ordersIds;
  return user;
};

module.exports = getUserById;
