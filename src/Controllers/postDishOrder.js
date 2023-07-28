const { DishOrder,Dish } = require("../db");
const getById = require('./getById');
const { Op } = require("sequelize");

const postDishOrder = async ({ userId, dishid, quantity, unitaryPrice, totalPrice }) => {
  const dish = await getById(dishid);
  const dishName = dish.name;
  const newDishOrder = await DishOrder.create({ userId, dishid, dishName ,quantity,unitaryPrice,totalPrice });

  return newDishOrder.id;
};

module.exports = postDishOrder;
