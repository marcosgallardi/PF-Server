const { DishSideOrder, DrinkOrder, SideOrder, DesertOrder, DishOrder } = require("../db");
const { Op } = require("sequelize");

const getByUserTime = async (userId, createdAt) => {
  const searchDrinkOrder = await DrinkOrder.findAll({
    where: {
      userId: userId,
      createdAt: { [Op.iLike]: `%${createdAt.slice(0, createdAt.length - 2)}%` },
    },
  });
  if (searchDrinkOrder) {
    return searchDrinkOrder;
  } else {
    throw Error("id no encontrada");
  }
};

module.exports = getByUserTime;
