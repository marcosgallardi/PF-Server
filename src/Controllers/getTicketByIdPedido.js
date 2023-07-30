const { Ticket } = require("../db");
const getByIdOrders = require("./getByIdOrders");
const getById = require("./getById");
const getTicketByIdPedido = async (idPedido) => {

  let ticketForFront = [];
  let ultimatePrice = 0;
  const ticket = await Ticket.findAll({
    where: {
      idPedido: idPedido,
    },
  });

  if (ticket.length > 0) {
    const orders = ticket[0].idsCompleteOrder;


    const firstOrder = await getByIdOrders(orders[0]); // Obtener la primera orden
    const { userId } = firstOrder; // Obtener el userId de la primera orden

    const user = await getById(userId);
    const { name, lastName, email, phoneNumber } = user;
    const userInfo = {
      pedido:idPedido,
      name: name,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
    };
    ticketForFront.push(userInfo);

    //buscamos dentro de la tabla completeOrder por id para traernos los registros
    for (i = 0; i < orders.length; i++) {
      let dishNameP = null;
      let sideNameP = null;
      let sideOrder = null;
      let dishSideQuantity = null;
      let dishSidePrice = null;
      let drinksP = [];
      let driksTPrice = 0;
      let desertsTPrice = 0;
      let dessertsP = [];
      const order = await getByIdOrders(orders[i]); //nos traemos el registro de la orden
      console.log('ORDERRRRRRRRR===============',orders[i])
      let { dishSideId, drinks, deserts, totalPrice } = order;
 

      //------------------------------------------------------------------------------------------------------------
      //------------------------------------------------DISHSIDEORDER-----------------------------------------------
      //------------------------------------------------------------------------------------------------------------
      //buscamos por id dentro de dishSideOrder los registros
      if (dishSideId !== null) {
        const dishSide = await getByIdOrders(dishSideId);

        let { dishOrderId, sideOrderId, quantity, totalPrice } = dishSide;
        dishSideQuantity = quantity; //nos guardamos la cantidad de platos con acompañamiento
        dishSidePrice = totalPrice;
        //buscamos por id dentro de side los registros
        const dishOrder = await getByIdOrders(dishOrderId);
        const { dishName } = dishOrder;
        dishNameP = dishName; //nos guardamos el nombre del plato
        //buscamos por id dentro de la tabla side
        sideOrder = await getByIdOrders(sideOrderId);
        
        if (sideOrder && sideOrder !== null) {
          const { sideName } = sideOrder;
          sideNameP = sideName;
          sideOrderId = null;
        } //guardamos el nombre del acompañamiento
      }else if (!sideOrder){
        sideNameP = null
      }
      //------------------------------------------------------------------------------------------------------------
      //------------------------------------------------DRINKORDER--------------------------------------------------
      //------------------------------------------------------------------------------------------------------------
      for (j = 0; j < drinks.length; j++) {
        let drinkOrder = drinks[j];
        let drinkObj = {};
        let drink = await getByIdOrders(drinkOrder);
        drinkObj = {
          name: drink.drinkName,
          quantity: drink.quantity,
          price: +drink.totalPrice,
        };

        drinksP.push(drinkObj);
        driksTPrice += +drinkObj.price;
      }
      //------------------------------------------------------------------------------------------------------------
      //------------------------------------------------DESERTORDER--------------------------------------------------
      //------------------------------------------------------------------------------------------------------------

      for (K = 0; K < deserts.length; K++) {
        const desertOrder = deserts[K];
        let desertObj = {};
        const desert = await getByIdOrders(desertOrder);
        desertObj = {
          name: desert.name,
          quantity: desert.quantity,
          price: desert.totalPrice,
        };
        dessertsP.push(desertObj);
        desertsTPrice += +desertObj.price;
      }

      const ticketObj = {
        dish: dishNameP,
        garnish: sideNameP,
        quantity: dishSideQuantity,
        totalPrice:totalPrice,
        drinks: drinksP,
        desserts: dessertsP,
      };
      ticketForFront.push(ticketObj);
      ultimatePrice += totalPrice + driksTPrice + desertsTPrice;
    }
    ticketForFront.push({totalTicketPrice:ultimatePrice});
    return ticketForFront;
  } else throw Error("no hay pedidos con ese identificador");
};

module.exports = getTicketByIdPedido;
