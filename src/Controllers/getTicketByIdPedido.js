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
  console.log(ticket, "TicketCONTROLLER!!!!!!!!!!!!!!!!!!!!!!!!!!!!");

  if (ticket.length > 0) {
    const orders = ticket[0].idsCompleteOrder;

    const firstOrder = await getByIdOrders(orders[0]); // Obtener la primera orden
    const { userId } = firstOrder; // Obtener el userId de la primera orden

    const user = await getById(userId);
    const { name, lastName, email, phoneNumber, idsCompleteOrder } = user;
    const userInfo = {
      pedido: idPedido,
      name: name,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
      idsCompleteOrder: idsCompleteOrder,
    };
    ticketForFront.push(userInfo);

    //buscamos dentro de la tabla completeOrder por id para traernos los registros
    for (i = 0; i < orders.length; i++) {
      let completeDish = null;
      let completeSide = null;
      let sideOrder = null;
      let dishSideQuantity = null;
      let dishSidePrice = null;
      let drinksP = [];
      let driksTPrice = 0;
      let desertsTPrice = 0;
      let dessertsP = [];
      const order = await getByIdOrders(orders[i]); //nos traemos el registro de la orden
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
        const { dishid } = dishOrder;
        let dishObj = await getById(dishid)
        //le agregamos la propiedad quantity al objeto completeDish
        completeDish = {
          ...dishObj.dataValues,
          quantity
        }
       //nos guardamos el nombre del plato
        //buscamos por id dentro de la tabla side
        sideOrder = await getByIdOrders(sideOrderId);

        if (sideOrder && sideOrder !== null) {
          const { sideId } = sideOrder;
          const sideObj = await getById(sideId);
          //le agregamos la propiedad quantity al objeto completeDish
          completeSide = {
          ...sideObj.dataValues,
          quantity
        }
          sideOrderId = null;
        } //guardamos el nombre del acompañamiento
      } else if (!sideOrder) {
        sideNameP = null;
      }
      //------------------------------------------------------------------------------------------------------------
      //------------------------------------------------DRINKORDER--------------------------------------------------
      //------------------------------------------------------------------------------------------------------------
      for (j = 0; j < drinks.length; j++) {
        let drinkOrder = drinks[j];
        let drinkObj = {};
        let drink = await getByIdOrders(drinkOrder);
        let {drinkId} = drink;
        let completeDrinkObj = await getById(drinkId)
        completeDrinkObj = {
          ...completeDrinkObj.dataValues,
          quantity : drink.quantity
        }
        drinkObj = {
          drink: completeDrinkObj,
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
        let {desertId} = desert;
        let completeDesertObj = await getById(desertId);
        completeDesertObj = {
          ...completeDesertObj.dataValues,
          quantity: desert.quantity
        }
        desertObj = {
          dessert: completeDesertObj,
          price: desert.totalPrice,
        };
        dessertsP.push(desertObj);
        desertsTPrice += +desertObj.price;
      }

      const ticketObj = {
        dish: completeDish,
        garnish: completeSide,
        totalPrice: totalPrice,
        drinks: drinksP,
        desserts: dessertsP,
      };

      ticketForFront.push(ticketObj);
      ultimatePrice += totalPrice + driksTPrice + desertsTPrice;
    }
    ticketForFront.push({ totalTicketPrice: ultimatePrice });
    return ticketForFront;
  } else throw Error("no hay pedidos con ese identificador");
};

module.exports = getTicketByIdPedido;
