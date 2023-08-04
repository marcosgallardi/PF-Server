const {
  CompleteOrder,
  DishOrder,
  Dish,
  Drink,
  DrinkOrder,
  Desert,
} = require("../db");
const postDrinkOrder = require("./postDrinkOrder");
const postDesertOrder = require("./postDesertOrder");
const postDishOrder = require("./postDishOrder");
const postSideOrder = require("./postSideOrder");
const postDishSideOrder = require("./postDishSideOrder");
const postTicket = require("./postTicket");
const getById = require("./getById");
const webHookMP = require("../Notification/webHookMP");
<<<<<<< HEAD
const { Server, app } = require("../app");
const alertTicket = require("../Sockets/socket");
=======

const mailCreate = require("./mailCreate");

>>>>>>> 750e2a1183366d3488a690427dda28f5dd4f7bf0
const postCompleteOrder = async ({ order, userId }) => {
  let dishOrderId = null;
  let sideOrderId = null;
  let dishSideOrderId = null;
  let totalPriceDish = null;
  let totalPriceSide = null;
  let completesOrders = [];
  const user = await getById(userId);
  const userEmail = user.email;

  for (let i = 0; i < order.length; i++) {
    let drinksOrdersIds = [];
    let desertsOrdersIds = [];
    const { drinks, desserts, dish, garnish } = order[i];

    const hasDish = dish !== undefined && dish !== null && dish.length > 0;

    const hasGarnish =
      garnish !== undefined && garnish !== null && garnish.length > 0;

    const hasDrinks =
      drinks !== undefined && drinks !== null && drinks.length > 0;

    const hasDeserts =
      desserts !== undefined && desserts !== null && desserts.length > 0;

    if (hasDish) {
      const totalPrice = dish[0].price * dish[0].quantity;

      // const totalPrice = parseFloat(dish[0].price) * dish[0]?.quantity;

      // totalPriceDish = totalPrice;

      const dishObj = {
        userId,
        dishid: dish[0].id,
        quantity: dish[0].quantity,
        unitaryPrice: +dish[0].price,
        totalPrice: totalPrice,
      };
      dishOrderId = await postDishOrder(dishObj);
      totalPriceDish = totalPrice;
      const dishOrderToUpdate = await DishOrder.findByPk(dishOrderId);
      const dishToUpdate = await Dish.findByPk(dishOrderToUpdate.dishid);
      dishToUpdate.stock = dishToUpdate.stock - 1;
      await dishToUpdate.save();
    }
    if (hasGarnish) {
      const totalPrice = garnish[0].price * garnish[0]?.quantity;

      const garnishObj = {
        userId,
        sideId: garnish[0].id,
        quantity: garnish[0].quantity,
        unitaryPrice: garnish[0].price,
        totalPrice,
      };
      sideOrderId = await postSideOrder(garnishObj);
      totalPriceSide = totalPrice;
    } else if (!hasGarnish) {
      sideOrderId = null;
    }

    if (dishOrderId !== null) {
      const dishSideObj = {
        userId,
        dishOrderId,
        sideOrderId,
        quantity: dish[0].quantity,
        totalPrice: totalPriceDish + totalPriceSide,
      };
      dishSideOrderId = await postDishSideOrder(dishSideObj);
    }

    //* HASTA ACA ANDA CHE!

    if (hasDrinks) {
      for (let j = 0; j < drinks.length; j++) {
        const drinkObj = {
          userId,
          drinkId: drinks[j].id,
          quantity: drinks[j].quantity,
          unitaryPrice: drinks[j].price,
          totalPrice: drinks[j].price * drinks[j].quantity,
        };
        const drinkToUpdate = await Drink.findByPk(drinks[j].id);

        let drinkOrderId = await postDrinkOrder(drinkObj);

        drinkToUpdate.stock = drinkToUpdate.stock - drinks[j].quantity;
        drinksOrdersIds.push(drinkOrderId);

        // Restamos el stock

        await drinkToUpdate.save();
      }
    } else drinksOrdersIds === null;

    if (hasDeserts) {
      for (let k = 0; k < desserts.length; k++) {
        const dessertObj = {
          userId,
          desertId: desserts[k].id,
          quantity: desserts[k].quantity,
          unitaryPrice: desserts[k].price,
          totalPrice: desserts[k].price * desserts[k].quantity,
        };
        const dessertToUpdate = await Desert.findByPk(desserts[k].id);
        let desertOrderId = await postDesertOrder(dessertObj);
        dessertToUpdate.stock = dessertToUpdate.stock - desserts[k].quantity;
        desertsOrdersIds.push(desertOrderId);
        await dessertToUpdate.save();
      }
    } else desertsOrdersIds === null;

    const completeOrderObj = {
      dishSideId: dishSideOrderId,
      drinks: drinksOrdersIds,
      deserts: desertsOrdersIds,
      userId,
      totalPrice: totalPriceDish + totalPriceSide,
      userEmail,
    };

    const newCompleteOrder = await CompleteOrder.create(completeOrderObj);
    completesOrders.push(newCompleteOrder.id);
  }

  const ticket = await postTicket({
    idsCompleteOrder: completesOrders,
    idUser: userId,
  });
  console.log(
    "codigo del ticket-------------------------------------",
    ticket.idPedido
  );

  const io = new Server(app, {
    cors: {
      origin: "http://localhost:3000", // Permite todas las solicitudes desde cualquier origen

      methods: "GET,HEAD,PUT,PATCH,POST,DELETE", // Métodos HTTP permitidos
      allowedHeaders: "Content-Type,Authorization",
    },
  });

  if (ticket) {
    alertTicket(io);
  }
  return ticket.idPedido;
};

module.exports = postCompleteOrder;
