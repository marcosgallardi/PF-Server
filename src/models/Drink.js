const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Drink",
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
      category: {
        type: DataTypes.STRING,
        defaultValue: "drink",
      },
      volume: {
        type: DataTypes.ENUM,
        values: ["250ml", "500ml", "1000ml", "750ml", "355ml", "473ml", "1500ml"],
        allowNull: false,
      },
      type: {
        type: DataTypes.ENUM,
        values: ["cerveza", "vino", "agua", "gaseosa"],
        allowNull: false,
      },
      alcohol: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 50,
      },
      disabled: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      //se muestra pero no se habilita
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
      image: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      timestamps: false,
      hooks: {
        beforeUpdate: (drink) => {
          // Verificar si el stock ha llegado a 0
          if (drink.stock === 0) {
            drink.available = false; // Si el stock es 0, deshabilitar el producto
          }
          else{
            drink.available = true;
          }
        },
      },
    }
  );
};
