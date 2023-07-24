const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "DishSideOrder",
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
      //ver si es dishID
      //cambiar a dishOrder y Sideorder
      dishOrderId: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
          model: "DishOrders",
          key: "id",
        },
      },
      sideOrderId: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
          model: "SideOrders",
          key: "id",
        },
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      // unitaryPrice: {
      //   type: DataTypes.FLOAT,
      //   allowNull: false,
      // },
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
      hooks: {
        beforeCreate: (dishOrder) => {
          dishOrder.totalPrice = dishOrder.unitaryPrice * dishOrder.quantity;
        },
        beforeUpdate: (dishOrder) => {
          dishOrder.totalPrice = dishOrder.unitaryPrice * dishOrder.quantity;
        },
      },
    }
  );
};
