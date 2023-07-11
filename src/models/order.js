const { DataTypes } = require("sequelize");
const Drinks = require("./Bebida");
const Deserts = require("./Postre");

module.exports = (sequelize) => {
  const Order = sequelize.define(
    "Order",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      // Otras propiedades del modelo "Order"???
    },
    {
      timestamps: false,
    }
  );
};
//   Order.associate = (models) => {
//     Order.belongsToMany(models.Drinks, {
//       through: "OrderDrinks",
//       foreignKey: "orderId",
//       as: "drinks",
//     });
//     Order.belongsToMany(models.Deserts, {
//       through: "OrderDeserts",
//       foreignKey: "orderId",
//       as: "deserts",
//     });
//   };
