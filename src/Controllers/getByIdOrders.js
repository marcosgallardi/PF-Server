const { DishSideOrder, DrinkOrder, SideOrder, DesertOrder, DishOrder } = require("../db");
const { Op } = require("sequelize");

const getByIdOrders = async (id) => {
  const searchDishOrder = await DishOrder.findOne({
    where: {
      id: id,
    },
  });
  if (searchDishOrder) return searchDishOrder;
  const searchDrinkOrder = await DrinkOrder.findOne({
    where: {
      id: id,
    },
  });
  if (searchDrinkOrder) return searchDrinkOrder;
  const searchSideOrder = await SideOrder.findOne({
    where: {
      id: id,
    },
  });
  if (searchSideOrder) return searchSideOrder;
  const searchDesertOrder = await DesertOrder.findOne({
    where: {
      id: id,
    },
  });
  if (searchDesertOrder) return searchDesertOrder;

  const searchDishSideOrder = await DishSideOrder.findOne({
    where: {
      id: id,
    },
  });
  if (searchDishSideOrder) return searchDishSideOrder;
  else {
    throw Error("id no encontrada");
  }
};

module.exports = getByIdOrders;
