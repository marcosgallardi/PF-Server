const { DishSideOrder, DrinkOrder, SideOrder, DesertOrder, DishOrder, CompleteOrder } = require("../db");
const { Op } = require("sequelize");

const getByIdOrders = async (id) => {
  if (id === null) {
    return null;
  }
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
  const searchCompleteOrder = await CompleteOrder.findOne({
    where: {
      id: id,
    },
  });

  if (searchCompleteOrder) return searchCompleteOrder;
  else {
    throw Error("id no encontrada");
  }
};

module.exports = getByIdOrders;
