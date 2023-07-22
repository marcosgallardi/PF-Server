const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "CompleteOrder",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: UUIDV4,
        allowNull: false,
      },
      userId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
      },
      dishSideId: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
          model: "DishSideOrders",
          key: "id",
        },
      },

      drinkId: {
        type: DataTypes.ARRAY(DataTypes.UUID), // Tipo de datos ARRAY con UUID
        allowNull: true,
      },
      desertId: {
        type: DataTypes.ARRAY(DataTypes.UUID),
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      unitaryPrice: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      totalPrice: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      timestamps: true,
    }
  );
};
