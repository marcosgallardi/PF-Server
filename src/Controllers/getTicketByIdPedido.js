const { Ticket } = require("../db");
const getByIdOrders = require("./getByIdOrders");
const getById = require("./getById");
const getTicketByIdPedido = async (idPedido) => {
  let dishNameP = null;
  let sideNameP = null;
  let dishSideQuantity = null;
  let dishSidePrice = null;
  let drinksP = [];
  let dessertsP = [];
  let ticketForFront = [];
  const ticket = await Ticket.findAll({
    where: {
      idPedido: idPedido,
    },
  });

  if (ticket.length > 0) {
    const orders = ticket[0].idsCompleteOrder;

    //buscamos dentro de la tabla completeOrder por id para traernos los registros
    for (i = 0; i < orders.length; i++) {
      const order = await getByIdOrders(orders[i]); //nos traemos el registro de la orden
      console.log("order_______", order);
      const { userId, dishSideId, drinks, deserts } = order;
      console.log("order_______", userId, dishSideId, drinks, deserts);

      //------------------------------------------------------------------------------------------------------------
      //------------------------------------------------USER--------------------------------------------------------
      //------------------------------------------------------------------------------------------------------------

      const user = await getById(userId);

      const { name, lastName, email, phoneNumber } = user;
      const userInfo = {
        name: name,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
      };
      ticketForFront.push(userInfo);
      //------------------------------------------------------------------------------------------------------------
      //------------------------------------------------DISHSIDEORDER-----------------------------------------------
      //------------------------------------------------------------------------------------------------------------
      //buscamos por id dentro de dishSideOrder los registros
      if (dishSideId !== null) {
        const dishSide = await getByIdOrders(dishSideId);

        const { dishOrderId, sideOrderId, quantity, totalPrice } = dishSide;
        dishSideQuantity = quantity; //nos guardamos la cantidad de platos con acompañamiento
        dishSidePrice = totalPrice;
        //buscamos por id dentro de side los registros
        const dishOrder = await getByIdOrders(dishOrderId);
        const { dishName } = dishOrder;
        dishNameP = dishName; //nos guardamos el nombre del plato
        //buscamos por id dentro de la tabla side
        const sideOrder = await getByIdOrders(sideOrderId);

        if (sideOrder !== null) {
          const { sideName } = sideOrder;
          sideNameP = sideName;
        } //guardamos el nombre del acompañamiento
      }
      //------------------------------------------------------------------------------------------------------------
      //------------------------------------------------DRINKORDER--------------------------------------------------
      //------------------------------------------------------------------------------------------------------------
      for (j = 0; j < drinks.length; j++) {
        let drinkOrder = drinks[j];
        let drinkObj = {};
        let drink = await getByIdOrders(drinkOrder);
        console.log("drink________", drink);
        drinkObj = {
          name: drink.drinkName,
          quantity: drink.quantity,
          price: drink.totalPrice,
        };

        drinksP.push(drinkObj);
      }
      //------------------------------------------------------------------------------------------------------------
      //------------------------------------------------DESERTORDER--------------------------------------------------
      //------------------------------------------------------------------------------------------------------------

      for (K = 0; K < deserts.length; K++) {
        const desertOrder = deserts[K];
        let desertObj = {};
        const desert = await getByIdOrders(desertOrder);
        console.log("desert________", desert);
        desertObj = {
          name: desert.name,
          quantity: desert.quantity,
          price: desert.totalPrice,
        };
        dessertsP.push(desertObj);
      }

      const ticketObj = {
        dish: dishNameP,
        garnish: sideNameP,
        quantity: dishSideQuantity,
        price: dishSidePrice,
        drinks: drinksP,
        desserts: dessertsP,
      };
      ticketForFront.push(ticketObj);
    }
    return ticketForFront;
  } else throw Error("no hay pedidos con ese identificador");
};

module.exports = getTicketByIdPedido;
