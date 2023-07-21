const { Order } = require("../db");
const { Op } = require("sequelize");

//la validacion NO deberia ser con el name, sino con el email
const postOrder = async ({ idUser, idDS, idDrink, quantity, idDesert }) => {
  const newOrder = await Order.create({ idUser, idDS, idDrink, quantity, idDesert });

  return newOrder;
};

module.exports = postOrder;
