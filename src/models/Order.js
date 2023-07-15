const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Order",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        primaryKey: true,
      },
      idPedido: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        unique:false,
      },
      idUser: {
        type: DataTypes.UUID,
        references: {
          model: "Users",
          key: "id",
        },
      },
      idDS: {
        type: DataTypes.UUID,
        references: {
          model: "dish_sides",
          key: "id",
        },
      },
      idDrink: {
        type: DataTypes.UUID,
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
