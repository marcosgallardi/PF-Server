const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "DrinkOrder",
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
      drinkName: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: false,
      },

      drinkId: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
          model: "Drinks",
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
        type: DataTypes.DECIMAL,
        allowNull: true,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      createdAt: {
        type: DataTypes.STRING,
        defaultValue: function () {
          const now = new Date();
          const formattedTime = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(
            2,
            "0"
          )}`;

          return formattedTime;
        },
        allowNull: false,
      },
    },
    {
      timestamps: false, // desabilitado
      paranoid: true
    }
  );
};
