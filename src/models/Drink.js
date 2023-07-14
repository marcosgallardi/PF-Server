const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Drink",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      volume: {
        type: DataTypes.ENUM,
        values: ["250ml", "500ml", "1000ml", "750ml", "355ml", "473ml", "1500ml"],
        allowNull: false,
      },
      type: {
        type: DataTypes.ENUM,
        values: ["cerveza", "vino", "agua"],
        allowNull: false,
        /* unique: true, */
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
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1000,
      },
    },
    {
      timestamps: false,
    }
  );
};
