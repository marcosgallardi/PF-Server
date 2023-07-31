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
      category: {
        type: DataTypes.STRING,
        defaultValue: "dish",
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
        values: ["pastas", "ensaladas", "carnes", "pescados y mariscos", "sopas", "minutas", "arroz", "sandwich"],
        allowNull: false,
      },
      //disabled:true ==> borrado lógico, estando en true, el plato NO se muestra
      disabled: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      //available:true significa que hay stock del producto != available: false, si bien no hay stock, el plato se muestra igual
      available: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },

      stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 50,
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
      salesCount: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      timestamps: false,
      hooks: {
        beforeUpdate: (dish) => {
          // Verificar si el stock ha llegado a 0
          if (dish.stock === 0) {
            dish.available = false; // Si el stock es 0, deshabilitar el producto
          }
        },
      },
    }
  );
};
