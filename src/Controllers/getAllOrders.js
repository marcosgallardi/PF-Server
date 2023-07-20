const { Order } = require("../db");

const getAllOrders = async () => {
  const orders = await Order.findAll();

  if (orders.length > 0) return orders;
  else throw Error("No orders found");
};

module.exports = getAllOrders;
