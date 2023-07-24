const { Dish, Drink, Desert, Side, Dish_side, User, Order, DrinkOrder, DesertOrder, OrderSide, SideOrder, DishSideOrder, DishOrder, CompleteOrder } = require("../db");

const restoreDish = async (id) => {
  const dishRes = await Dish.findOne({
    where: {
      id,
    },
    paranoid: false,
  });
  if (!dishRes) {
    throw Error("No se encontró el plato");
  }
  await dishRes.restore();

  return dishRes;
};

const restoreDrink = async (id) => {
  const drinkRes = await Drink.findOne({
    where: {
      id,
    },
    paranoid: false,
  });
  if (!drinkRes) {
    throw Error("No se encontró la bebida");
  }
  await drinkRes.restore();

  return drinkRes;
};

const restoreDesert = async (id) => {
  const desertRes = await Desert.findOne({
    where: {
      id,
    },
    paranoid: false,
  });

  if (!desertRes) {
    throw Error("No se encontró el postre");
  }
  await desertRes.restore();
 

  return desertRes;
};

const restoreSide = async (id) => {
  const sideRes = await Side.findOne({
    where: {
      id,
    },
    paranoid: false,
  });
  if (!sideRes) {
    throw Error("No se encontró el acompañamiento");
  }
  await sideRes.restore();

  return sideRes;
};

const restoreDishSide = async (id) => {
  const dishSideRes = await Dish_side.findOne({
    where: {
      id,
    },
    paranoid: false,
  });
  if (!dishSideRes) {
    throw Error("No se encontró la relación entre plato y acompañamiento");
  }
  await dishSideRes.restore();

  return dishSideRes;
};

const restoreUser = async (id) =>{
    const userRes = await User.findOne({
        where:{
            id
        },
        paranoid: false
    })
    if(!userRes){
        throw Error('No se encontro el usuario')
    }
    await userRes.restore();

    return userRes
  }


const restoreOrder = async (id) => {
  const orderRes = await Order.findOne({
    where: {
      id,
    },
    paranoid: false,
  });
  if (!orderRes) {
    throw Error("No se encontró el pedido");
  }
  await orderRes.restore();

  return orderRes;
};

const restoreDrinkOrder = async (id) => {
  const drinkOrderRes = await DrinkOrder.findOne({
    where: {
      id,
    },
    paranoid: false,
  });
  if (!drinkOrderRes) {
    throw Error("No se encontró el pedido de bebida");
  }
  await drinkOrderRes.restore();

  return drinkOrderRes;
};

const restoreDesertOrder = async (id) => {
  const desertOrderRes = await DesertOrder.findOne({
    where: {
      id,
    },
    paranoid: false,
  });
  if (!desertOrderRes) {
    throw Error("No se encontró el pedido de postre");
  }
  await desertOrderRes.restore();

  return desertOrderRes;
};

const restoreOrderSide = async (id) => {
  const orderSideRes = await OrderSide.findOne({
    where: {
      id,
    },
    paranoid: false,
  });
  if (!orderSideRes) {
    throw Error("No se encontró el pedido de acompañamiento");
  }
  await orderSideRes.restore();

  return orderSideRes;
};

const restoreSideOrder = async (id) => {
  const sideOrderRes = await SideOrder.findOne({
    where: {
      id,
    },
    paranoid: false,
  });
  if (!sideOrderRes) {
    throw Error("No se encontró el pedido de acompañamiento");
  }
  await sideOrderRes.restore();

  return sideOrderRes;
};

const restoreDishSideOrder = async (id) => {
  const dishSideOrderRes = await DishSideOrder.findOne({
    where: {
      id,
    },
    paranoid: false,
  });
  if (!dishSideOrderRes) {
    throw Error("No se encontró el pedido de relación entre plato y acompañamiento");
  }
  await dishSideOrderRes.restore();

  return dishSideOrderRes;
};

const restoreDishOrder = async (id) => {
  const dishOrderRes = await DishOrder.findOne({
    where: {
      id,
    },
    paranoid: false,
  });
  if (!dishOrderRes) {
    throw Error("No se encontró el pedido de plato");
  }
  await dishOrderRes.restore();

  return dishOrderRes;
};

const restoreCompleteOrder = async (id) => {
  const completeOrderRes = await CompleteOrder.findOne({
    where: {
      id,
    },
    paranoid: false,
  });
  if (!completeOrderRes) {
    throw Error("No se encontró el pedido completo");
  }
  await completeOrderRes.restore();

  return completeOrderRes;
};

module.exports = {
  restoreDish,
  restoreDrink,
  restoreDesert,
  restoreSide,
  restoreDishSide,
  restoreUser,
  restoreOrder,
  restoreDrinkOrder,
  restoreDesertOrder,
  restoreOrderSide,
  restoreSideOrder,
  restoreDishSideOrder,
  restoreDishOrder,
  restoreCompleteOrder,
};
