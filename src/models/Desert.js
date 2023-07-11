const { DataTypes } = require("sequelize");
const Orders = require("./Pedido");

module.exports = (sequelize) => {
  sequelize.define(
    "Desert",
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
        reference: {
          model: Orders,
          key: "name",
        },
      },
      type: {
        type: DataTypes.ENUM,
        values: ["cerveza", "vino", "agua"],
        allowNull: false,
        unique: true,
      },
      alcohol: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 50,
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
