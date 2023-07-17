const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Dish",
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
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      type: {
        type: DataTypes.ENUM,
        values: ["plato principal", "entrada"],
        allowNull: false,
      },
      subtype: {
        type: DataTypes.ENUM,
        //para revision 2 agregar values como array editable
        values: ["pastas", "ensaladas", "carnes", "pescados y mariscos", "sopas", "minutas", "arroz"],
        allowNull: false,
      },
      //disabled:true ==> borrado lógico, estando en true, el plato NO se muestra
      disabled: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      //available:true significa que hay stock del producto != available: false, si bien no hay stock, el plato se muestra igual
      available: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      calories: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        validate: {
          notEmpty: true,
        },
      },
      glutenfree: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      vegetarian: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      dailyspecial: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      price: {
        type: DataTypes.DECIMAL(10, 2),
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
    }
  );
};
