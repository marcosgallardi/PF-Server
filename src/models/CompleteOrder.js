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
      dishid: {
        type: DataTypes.ARRAY(DataTypes.UUID),
        allowNull: true,
        references: {
          model: "DishOrders",
          key: "id",
        },
      },
      sideID: {
        type: DataTypes.ARRAY(DataTypes.UUID),
        allowNull: true,
        references: {
          model: "SideOrders",
          key: "id",
        },
      },
      drinkId: {
        type: DataTypes.ARRAY(DataTypes.UUID),
        allowNull: true,
        references: {
          model: "DrinkOrders",
          key: "id",
        },
      },
      desertId: {
        type: DataTypes.ARRAY(DataTypes.UUID),
        allowNull: false,
        references: {
          model: "DesertOrders",
          key: "id",
        },
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
