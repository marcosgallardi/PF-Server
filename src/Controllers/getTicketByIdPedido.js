const {Ticket} = require('../db');
const getByIdOrders = require('./getByIdOrders');
const getById = require('./getById');
const getTicketByIdPedido = async (idPedido) => {
    let dishNameP = null;
    let sideNameP = null;
    let dishSideQuantity = null;
    let dishSidePrice = null;
    let drinksP = null;
    let dessertsP = null;
    let uName = null;
    let uLastName = null;
    let uEmail = null;
    let uPhone = null;
    const ticketForFront= [
        {
            name:uName,
            lastName:uLastName,
            email:uEmail,
            phoneNumber:uPhone,
        }
    ];
    const ticket = await Ticket.findOne({
      where: {
        idPedido: idPedido,
      },
    });
    const orders = ticket.idsCompleteOrder
    //buscamos dentro de la tabla completeOrder por id para traernos los registros
    for(i=0; i< orders.length;i++){
        const order = await getByIdOrders(orders[i]) //nos traemos el registro de la orden
        const {userId,dishSideId,drinks,deserts} = order[i];
//------------------------------------------------------------------------------------------------------------
//------------------------------------------------USER--------------------------------------------------------
//------------------------------------------------------------------------------------------------------------

    const user = await getById(userId);
     uName = user.name;
     uLastName = user.lastName;
     uEmail = user.email;
     uPhone = user.phoneNumber;
//------------------------------------------------------------------------------------------------------------
//------------------------------------------------DISHSIDEORDER-----------------------------------------------
//------------------------------------------------------------------------------------------------------------
    //buscamos por id dentro de dishSideOrder los registros
        const dishSide = await getByIdOrders(dishSideId);
        const {dishOrderId,sideOrderId,quantity,totalPrice} = dishSide;
        dishSideQuantity = quantity; //nos guardamos la cantidad de platos con acompañamiento
        dishSidePrice = totalPrice;
    //buscamos por id dentro de side los registros
        const dishOrder = await getByIdOrders(dishOrderId);
        const {dishName} = dishOrder;
        dishNameP = dishName; //nos guardamos el nombre del plato
    //buscamos por id dentro de la tabla side
        const sideOrder = await getByIdOrders(sideOrderId);
        const {sideName} = sideOrder
        sideNameP = sideName; //guardamos el nombre del acompañamiento
        
        //------------------------------------------------------------------------------------------------------------
        //------------------------------------------------DRINKORDER--------------------------------------------------
        //------------------------------------------------------------------------------------------------------------
        for(j=0; j < drinks.length;j++){
            const drinkOrder = drinks[j];
            const drinkObj = {};
            const drink = await getByIdOrders(drinkOrder);
            drinkObj={
                name:drink.name,
                quantity:drink.quantity,
                price:drink.totalPrice
            }
        drinksP.push(drinkObj);
        }
        //------------------------------------------------------------------------------------------------------------
        //------------------------------------------------DESERTORDER--------------------------------------------------
        //------------------------------------------------------------------------------------------------------------

        for(K=0; K < deserts.length;K++){
            const desertOrder = deserts[K];
            const desertObj = {};
            const desert = await getByIdOrders(desertOrder);
            desertObj={
                name:desert.name,
                quantity:desert.quantity,
                price:desert.totalPrice
            }
        dessertsP.push(desertObj);
        };
        

    const ticketObj = {
        dish:dishNameP,
        garnish:sideNameP,
        quantity:dishSideQuantity,
        price:dishSidePrice,
        drinks:drinksP,
        desserts:dessertsP,
    }
    ticketForFront.push(ticketObj);
    }
    return ticketForFront;
  };
  
  module.exports = getTicketByIdPedido;



  