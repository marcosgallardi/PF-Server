const { DataTypes } = require("sequelize");
const Orders = require("./Pedido");

module.exports = (sequelize) => {
  sequelize.define(
    "Side",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      type: {
        type: DataTypes.ENUM,
        values: ["Salsa Bolognesa", "Pesto", "Estofado", "Salsa Blanca", "Papas Fritas", "Ensalada", "Puré"],
        allowNull: false,
        unique: true,
      },
      available: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },

      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1000,
      },
    },
    {
      timestamps: false,
    }
  );
};
