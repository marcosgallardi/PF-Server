const { CompleteOrder } = require("../db");
const { Op } = require("sequelize");
const postDrinkOrder = require("./postDrinkOrder");
const postDesertOrder = require("./postDesertOrder");
const postDishOrder = require("./postDishOrder");
const postSideOrder = require("./postSideOrder");
const postDishSideOrder = require("./postDishSideOrder");
const mailCreate = require("../Controllers/mailCreate");
const getById = require("./getById");

const ticket = [];

let dishOrderId = null;
let sideOrderId = null;
let dishSideOrderId = null;
let drinksOrdersIds = [];
let desertsOrdersIds = [];
let totalPriceDish = null;
let totalPriceSide = null;

const postCompleteOrder = async ({ order, userId }) => {
  mailCreate(order, userId );
  const user = await getById(userId);
  const userEmail = user.email;
  for (i = 0; i < order.length; i++) {
    const { drinks, desserts, dish, garnish } = order[i];
    const dishId = dish.id;
    const quantity = +dish.quantity;
    const unitaryPrice = +dish.price;
    const totalPrice = unitaryPrice * quantity;
    totalPriceDish = totalPrice;

    if (dish !== undefined && dish !== null) {
      dishOrderId = await postDishOrder({
        userId,
        dishId,
        quantity,
        unitaryPrice,
        totalPrice,
      });
    }
    if (garnish !== undefined && garnish !== null) {
      const sideId = garnish.id;
      const quantity = +garnish.quantity;
      const unitaryPrice = +garnish.price;
      const totalPrice = unitaryPrice * quantity;
      totalPriceSide = totalPrice;
      sideOrderId = await postSideOrder({
        userId,
        sideId,
        quantity,
        unitaryPrice,
        totalPrice,
      });
    }

    if (dishOrderId !== null) {
      dishSideOrderId = await postDishSideOrder({
        userId,
        dishOrderId,
        sideOrderId,
        quantity,
        totalPrice: totalPriceDish + totalPriceSide,
      });
    }

    if (drinks !== undefined && drinks !== null) {
      for (j = 0; j < drinks.length; j++) {
        let drinkId = drinks[j].id;
        let quantity = drinks[j].quantity;
        let unitaryPrice = drinks[j].price;
        let totalPrice = unitaryPrice * quantity;

        let drinkOrderId = await postDrinkOrder({
          userId,
          drinkId,
          quantity,
          unitaryPrice,
          totalPrice,
        });

        drinksOrdersIds.push(drinkOrderId);
      }
    } else drinksOrdersIds === null;
    if (desserts !== undefined && desserts !== null) {
      for (k = 0; k < order[k].desserts.length; k++) {
        let desertId = desserts[k].id;
        let quantity = desserts[k].quantity;
        let unitaryPrice = deserts[k].price;
        let totalPrice = unitaryPrice * quantity;
        let desertOrderId = await postDesertOrder({
          userId,
          desertId,
          quantity,
          unitaryPrice,
          totalPrice,
        });
        desertsOrdersIds.push(desertOrderId);
      }
    } else desertsOrdersIds === null;

    const newCompleteOrder = await CompleteOrder.create({
      dishSideId: dishSideOrderId,
      drinks: drinksOrdersIds, //es un array con id de drinksOrders
      deserts: desertsOrdersIds, //es un array con id de desertsOrders
      userId: userId,

      userEmail: userEmail,
    });
    ticket.push(newCompleteOrder.id);
    return newCompleteOrder;
  }
  
};

module.exports = postCompleteOrder;
