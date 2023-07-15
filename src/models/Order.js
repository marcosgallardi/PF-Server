const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Order",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true,
      },
      idPedido: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        allowNull: false,
        unique:false,
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
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "dish_sides",
          key: "id",
        },
      },
      idDrink: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Drinks",
          key: "id",
        },
        //cantidad de bebidas
      quantity:{
        type:DataTypes.INTEGER,
        allowNull:false,
      }
      },
      idDesert: {
        type: DataTypes.UUID,
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
