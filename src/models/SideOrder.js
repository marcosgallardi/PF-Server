const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "SideOrder",
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
      sideId: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
          model: "Sides",
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
      paranoid: true,
      hooks: {
        beforeCreate: (sideOrder) => {
          sideOrder.totalPrice = sideOrder.unitaryPrice * sideOrder.quantity;
        },
        beforeUpdate: (sideOrder) => {
          sideOrder.totalPrice = sideOrder.unitaryPrice * sideOrder.quantity;
        },
      },
    }
  );
};
