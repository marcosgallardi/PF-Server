const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "DishOrder",
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
        type: DataTypes.UUID,
        allowNull: true,
        references: {
          model: "Dishes",
          key: "id",
        },
      },
      dishName: {
        type: DataTypes.STRING,
        allowNull: true,
        unique:false,
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
    }, //falta force db para que funcione el multiplicador
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
