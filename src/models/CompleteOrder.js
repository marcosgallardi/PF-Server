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
        allowNull: true,
        references: {
          model: "Users",
          key: "id",
        },
        userEmail: {
          type: DataTypes.STRING,
          allowNull: true,
          validators: {
            isEmail: true,
          },
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
      // dishName: { type: DataTypes.STRING },
      // sideName: { type: DataTypes.STRING },

      // desertName: { type: DataTypes.STRING },

      drinks: {
        type: DataTypes.ARRAY(DataTypes.UUID), // Tipo de datos ARRAY con UUID
        allowNull: false,
      },
      deserts: {
        type: DataTypes.ARRAY(DataTypes.UUID),
        allowNull: true,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      unitaryPrice: {
        type: DataTypes.FLOAT,
        allowNull: true,
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
