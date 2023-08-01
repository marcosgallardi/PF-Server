// models/cart.js

const { DataTypes, UUIDV4} = require("sequelize");

// Define el modelo para el carrito
module.exports = (sequelize) => {
  sequelize.define(
    "cart",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: UUIDV4,
        allowNull: false,
      },
      // Define los campos del carrito
      // Puedes ajustar los campos según tus necesidades
      cartItems: {
        type: DataTypes.ARRAY(DataTypes.JSONB),
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
