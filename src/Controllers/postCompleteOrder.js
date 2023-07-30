const { CompleteOrder } = require("../db");
const postDrinkOrder = require("./postDrinkOrder");
const postDesertOrder = require("./postDesertOrder");
const postDishOrder = require("./postDishOrder");
const postSideOrder = require("./postSideOrder");
const postDishSideOrder = require("./postDishSideOrder");
const postTicket = require("./postTicket");
const getById = require("./getById");

const postCompleteOrder = async ({ order, userId }) => {
  let dishOrderId = null;
  let sideOrderId = null;
  let dishSideOrderId = null;
  let totalPriceDish = null;
  let totalPriceSide = null;
  let completesOrders = [];
  const user = await getById(userId);
  const userEmail = user.email;

  // console.log('___________CONTROLLER CREATE_____________');
  // console.log('LONGITUD DE ORDER', order.length);

  for (i = 0; i < order.length; i++) {
    let drinksOrdersIds = [];
    let desertsOrdersIds = [];
    const { drinks, desserts, dish, garnish } = order[i];

    const hasDish = dish !== undefined && dish !== null && dish.length > 0;

    const hasGarnish = garnish !== undefined && garnish !== null && garnish.length > 0;

    const hasDrinks = drinks !== undefined && drinks !== null && drinks.length > 0;

    const hasDeserts = desserts !== undefined && desserts !== null && desserts.length > 0;

    if (hasDish) {
      const totalPrice = dish[0].price * dish[0].quantity;
      

      // const totalPrice = parseFloat(dish[0].price) * dish[0]?.quantity;

      // totalPriceDish = totalPrice;

      const dishObj = {
        userId,
        dishid: dish[0].id,
        quantity: dish[0].quantity,
        unitaryPrice: +dish[0].price,
        totalPrice:totalPrice,
      };
      dishOrderId = await postDishOrder(dishObj);
      totalPriceDish = totalPrice
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
    }else if (!hasGarnish){
      sideOrderId = null;
    }

    if (dishOrderId !== null) {
      const dishSideObj = {
        userId,
        dishOrderId,
        sideOrderId,
        quantity: dish[0].quantity,
        totalPrice: totalPriceDish + totalPriceSide
      }
      dishSideOrderId = await postDishSideOrder(dishSideObj);
    }

    //* HASTA ACA ANDA CHE!

    if (hasDrinks) {
      for (j = 0; j < drinks.length; j++) {
        const drinkObj = {
          userId,
          drinkId: drinks[j].id,
          quantity: drinks[j].quantity,
          unitaryPrice: drinks[j].price,
          totalPrice: drinks[j].price * drinks[j].quantity,
        };

        let drinkOrderId = await postDrinkOrder(drinkObj);

        drinksOrdersIds.push(drinkOrderId);
      }
    } else drinksOrdersIds === null;

    if (hasDeserts) {
      for (k = 0; k < desserts.length; k++) {
        const dessertObj = {
          userId,
          desertId: desserts[k].id,
          quantity: desserts[k].quantity,
          unitaryPrice: desserts[k].price,
          totalPrice: desserts[k].price * desserts[k].quantity,
        };

        let desertOrderId = await postDesertOrder(dessertObj);

        desertsOrdersIds.push(desertOrderId);
      }
    } else desertsOrdersIds === null;


    const completeOrderObj = {
      dishSideId:dishSideOrderId,
      drinks:drinksOrdersIds,
      deserts:desertsOrdersIds,
      userId,
      totalPrice: totalPriceDish+totalPriceSide,
      userEmail
    }

    const newCompleteOrder = await CompleteOrder.create(completeOrderObj);
    completesOrders.push(newCompleteOrder.id);
  }

  const ticket = await postTicket({ idsCompleteOrder: completesOrders, idUser: userId });
  console.log('codigo del ticket-------------------------------------',ticket.idPedido);
  return ticket;
};

module.exports = postCompleteOrder;
