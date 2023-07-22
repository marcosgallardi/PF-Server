// const { DataTypes, UUIDV4, Op } = require("sequelize");

// module.exports = (sequelize) => {
//   // Definición del modelo CompleteOrder
//   // ...

//   // Asociaciones con los modelos DishOrder, SideOrder, DrinkOrder y DesertOrder
//   CompleteOrder.belongsToMany(DishOrder, { through: "CompleteOrder_DishOrder", foreignKey: "orderId" });
//   CompleteOrder.belongsToMany(SideOrder, { through: "CompleteOrder_SideOrder", foreignKey: "orderId" });
//   CompleteOrder.belongsToMany(DrinkOrder, { through: "CompleteOrder_DrinkOrder", foreignKey: "orderId" });
//   CompleteOrder.belongsToMany(DesertOrder, { through: "CompleteOrder_DesertOrder", foreignKey: "orderId" });
// };

// // En el controlador o servicio donde recibes los datos del POST y creas la orden completa
// const { CompleteOrder, DishOrder, SideOrder, DrinkOrder, DesertOrder } = require("./models");

// // Obtener los precios totales de los elementos representados por los IDs
// const dishIds = ["efd1aa37-f9e4-41be-884f-812187dc8123", "106efe00-e3b0-4d90-9879-51814615e9e0"];
// const sideIds = ["6a3efef7-e7b1-4f5b-bc69-61e3d6b10453"];
// const drinkIds = ["ce8d85ab-9b3f-4c06-8f0c-c73a1b24c9be", "6de5efb9-1f48-4f1d-904c-cc991d99da9b"];
// const desertIds = ["b23cd8c3-7b7d-4b98-8f33-9073d13e2a4d"];

// const dishOrders = await DishOrder.findAll({ where: { id: { [Op.in]: dishIds } } });
// const sideOrders = await SideOrder.findAll({ where: { id: { [Op.in]: sideIds } } });
// const drinkOrders = await DrinkOrder.findAll({ where: { id: { [Op.in]: drinkIds } } });
// const desertOrders = await DesertOrder.findAll({ where: { id: { [Op.in]: desertIds } } });

// const dishPrices = dishOrders.reduce((total, order) => total + order.totalPrice, 0);
// const sidePrices = sideOrders.reduce((total, order) => total + order.totalPrice, 0);
// const drinkPrices = drinkOrders.reduce((total, order) => total + order.totalPrice, 0);
// const desertPrices = desertOrders.reduce((total, order) => total + order.totalPrice, 0);

// // Calcular el precio total de la orden completa
// const totalPrice = dishPrices + sidePrices + drinkPrices + desertPrices;

// // Crear la orden completa con el precio total
// const completeOrder = await CompleteOrder.create({
//   userId: "efd1aa37-f9e4-41be-884f-812187dc8123",
//   dishid: dishIds,
//   sideID: sideIds,
//   drinkId: drinkIds,
//   desertId: desertIds,
//   quantity: 3,
//   unitaryPrice: 10.99,
//   totalPrice: totalPrice,
//   image: "imagen.jpg",
// });

// // El objeto completeOrder ahora contendrá el precio total de la orden completa
// console.log(completeOrder.totalPrice);
