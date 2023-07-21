const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "DesertOrder",
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
      desertId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Deserts",
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
      hooks: {
        beforeCreate: (desertOrder) => {
          desertOrder.totalPrice = desertOrder.unitaryPrice * desertOrder.quantity;
        },
        beforeUpdate: (desertOrder) => {
          desertOrder.totalPrice = desertOrder.unitaryPrice * desertOrder.quantity;
        },
      },
    }
  );
};
