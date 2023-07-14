const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Order",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true,
      },
      idUser: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
      },
      idDS: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "dish_sides",
          key: "id",
        },
      },
      idDrink: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Drinks",
          key: "id",
        },
      },
      idDesert: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Deserts",
          key: "id",
        },
      },
    },
    {
      timestamps: false,
    }
  );
};
