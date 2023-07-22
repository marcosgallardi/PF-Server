const { Dish, Drink, Desert, Side, User, Order, Dish_side } = require("../db");
const { Op } = require("sequelize");

const getById = async (id) => {
  const searchDish = await Dish.findOne({
    where: {
      id: id,
    },
  });
  if (searchDish) return searchDish;

  const searchDesert = await Desert.findOne({
    where: {
      id: id,
    },
  });
  if (searchDesert) return searchDesert;

  const searchSide = await Side.findOne({
    where: {
      id: id,
    },
  });
  if (searchSide) return searchSide;

  const searchDrink = await Drink.findOne({
    where: {
      id: id,
    },
  });
  if (searchDrink) return searchDrink;

  const searchUser = await User.findOne({
    where: {
      id: id,
    },
  });
  if (searchUser) return searchUser;

  const searchOrder = await Order.findOne({
    where: {
      idPedido: id,
    },
  });
  if (searchOrder) return searchOrder;

  const searchDish_side = await Dish_side.findOne({
    where: {
      id: id,
    },
  });
  if (searchDish_side) return searchDish_side;
  else {
    throw Error("id no encontrada");
  }
};

module.exports = getById;
