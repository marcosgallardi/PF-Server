const { CompleteOrder } = require("../db");
const { Op } = require("sequelize");
const postDrinkOrder = require("./postDrinkOrder");
const postDesertOrder = require("./postDesertOrder");
const postDishOrder = require("./postDishOrder");
const postSideOrder = require("./postSideOrder");
const postDishSideOrder = require("./postDishSideOrder");
const getById = require("./getById");

let ticket = [];

let dishOrderId = null;
let sideOrderId = null;
let dishSideOrderId = null;

let totalPriceDish = null;
let totalPriceSide = null;

const postCompleteOrder = async ({ order, userId }) => {
  const user = await getById(userId);
  const userEmail = user.email;
  console.log('LONGITUD DE ORDER', order.length);

  for (i = 0; i < order.length; i++) {

    let drinksOrdersIds = [];
    let desertsOrdersIds = [];
    const { drinks, desserts, dish, garnish } = order[i];



    const totalPrice = parseFloat(dish[0].price) * dish[0]?.quantity;

    totalPriceDish = totalPrice;

    const dishObj = {
      userId, 
      dishid: dish[0].id, 
      quantity: dish[0].quantity, 
      unitaryPrice: parseFloat(dish[0].price),
      totalPrice 
    }

    if (dish !== undefined || dish !== null) {
 
      dishOrderId = await postDishOrder(dishObj);
      
    }
    if (garnish !== undefined && garnish !== null) {

      const totalPrice = garnish[0].price * garnish[0]?.quantity;

      const garnishObj = {
        userId, 
        sideId: garnish[0].id, 
        quantity: garnish[0].quantity, 
        unitaryPrice: garnish[0].price,
        totalPrice 
      }

      totalPriceSide = totalPrice;
      sideOrderId = await postSideOrder(garnishObj);
    }


    if (dishOrderId !== null) {
      dishSideOrderId = await postDishSideOrder({
        userId,
        dishOrderId,
        sideOrderId,
        quantity: dish[0].quantity,
        totalPrice: totalPriceDish + totalPriceSide,
      });
    }

//* HASTA ACA ANDA CHE!

    if (drinks !== undefined || drinks !== null) {
      for (j = 0; j < drinks.length; j++) {
        const drinkObj = {
          userId, 
          drinkId: drinks[j].id,
          quantity: drinks[j].quantity, 
          unitaryPrice: drinks[j].price,
          totalPrice: drinks[j].price * drinks[j].quantity
        }


        let drinkOrderId = await postDrinkOrder(drinkObj);

        drinksOrdersIds.push(drinkOrderId);
      }
    } else drinksOrdersIds === null;


    if (desserts !== undefined && desserts !== null) {

      console.log('DESSERT____', desserts);

      for (k = 0; k < desserts.length; k++) {

        const dessertObj = {
          userId, 
          desertId: desserts[k].id,
          quantity: desserts[k].quantity, 
          unitaryPrice: desserts[k].price,
          totalPrice: desserts[k].price * desserts[k].quantity
        }
        console.log('DESSERT OBJ____', dessertObj);

        let desertOrderId = await postDesertOrder(dessertObj);
        console.log('DESSERT ORDER ID____', desertOrderId);
        desertsOrdersIds.push(desertOrderId);

        console.log('DESERT ORDERD ID_____', desertsOrdersIds);
      }
    } else desertsOrdersIds === null;

    const newCompleteOrder = await CompleteOrder.create({
      dishSideId: dishSideOrderId,
      drinks: drinksOrdersIds, //es un array con id de drinksOrders
      deserts: desertsOrdersIds, //es un array con id de desertsOrders
      userId: userId,

      userEmail: userEmail,
    });

    console.log('COMPLETE ORDER____', newCompleteOrder);

  console.log('EMAIL____', userEmail);

    ticket.push(newCompleteOrder.id);
    
  }
  console.log('TICKET____', ticket);
  return ticket;
};



module.exports = postCompleteOrder;
