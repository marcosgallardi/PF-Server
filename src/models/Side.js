const { DataTypes,UUIDV4  } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Side",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: UUIDV4,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      type: {
        type: DataTypes.ENUM,
        values: ["Salsa Bolognesa", "Pesto", "Estofado", "Salsa Blanca", "Papas Fritas", "Ensalada", "Puré"],
        allowNull: false,
      },
      available: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },

      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1000,
      },
      //agregar imagen NO OBLIGATORIA
    },
    {
      timestamps: false,
    }
  );
};
