const { Dish, Drink, Desert, Side, Dish_side, User, Order, DrinkOrder, DesertOrder, OrderSide, SideOrder, DishSideOrder, DishOrder, CompleteOrder} = require("../db");

const deleteRecord = async (Model, id, modelName) => {
  try {
    const recordToDelete = await Model.findOne({ where: { id } });

    if (!recordToDelete) {
      throw new Error(`${modelName} no existe`);
    }

    await recordToDelete.destroy();

    return `${modelName} Borrado`;
  } catch (error) {
    throw error;
  }
};

const deleteDish = async (id) => {
  return deleteRecord(Dish, id, 'Plato');
};

const deleteDrink = async (id) => {
  return deleteRecord(Drink, id, 'Bebida');
};

const deleteDesert = async (id) => {
  return deleteRecord(Desert, id, 'Postre');
};

const deleteSide = async (id) => {
  return deleteRecord(Side, id, 'Acompañamiento');
};

const deleteDishSide = async (id) => {
  return deleteRecord(Dish_side, id, 'Relación Plato-Acompañamiento');
};

const deleteUser = async (id) => {
  return deleteRecord(User, id, 'Usuario');
};

const deleteOrder = async (id) => {
  return deleteRecord(Order, id, 'Orden');
};

const deleteDrinkOrder = async (id) => {
  return deleteRecord(DrinkOrder, id, 'Orden de Bebida');
};

const deleteDesertOrder = async (id) => {
  return deleteRecord(DesertOrder, id, 'Orden de Postre');
};

const deleteOrderSide = async (id) => {
  return deleteRecord(OrderSide, id, 'Orden de Acompañamiento');
};

const deleteSideOrder = async (id) => {
  return deleteRecord(SideOrder, id, 'Orden de Acompañamiento');
};

const deleteDishSideOrder = async (id) => {
  return deleteRecord(DishSideOrder, id, 'Orden de Plato y Acompañamiento');
};

const deleteDishOrder = async (id) => {
  return deleteRecord(DishOrder, id, 'Orden de Plato');
};

const deleteCompleteOrder = async (id) => {
  return deleteRecord(CompleteOrder, id, 'Orden Completa');
};

module.exports = {
  deleteDish,
  deleteDrink,
  deleteDesert,
  deleteSide,
  deleteDishSide,
  deleteUser,
  deleteOrder,
  deleteDrinkOrder,
  deleteDesertOrder,
  deleteOrderSide,
  deleteSideOrder,
  deleteDishSideOrder,
  deleteDishOrder,
  deleteCompleteOrder,
};
