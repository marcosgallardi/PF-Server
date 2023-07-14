const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Dish",
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
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      type: {
        type: DataTypes.ENUM,
        values: ["plato principal", "entrada"],
        allowNull: false,
      },
      subtype: {
        type: DataTypes.ENUM,
        values: ["pastas", "ensaladas", "carnes", "pescados y mariscos", "sopas", "minutas", "arroz"],
        allowNull: false,
      },
      //disabled:true ==> borrado lógico, estando en true, el plato NO se muestra
      disabled: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      //available:true significa que hay stock del producto != available: false, si bien no hay stock, el plato se muestra igual
      available: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      calories: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        validate: {
          notEmpty: true,
          isNumeric: true,
        },
      },
      glutenfree: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      vegetarian: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      dailyspecial: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 1000,
      },
    },
    {
      timestamps: false,
    }
  );
};
