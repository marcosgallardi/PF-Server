const { DataTypes,UUIDV4  } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "dish_side",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: UUIDV4,
        allowNull: false,
      },
      dishId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Dishes",
          key: "id",
        },
      },
      sideId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Sides",
          key: "id",
        },
      },
    },
    {
      timestamps: false,
    }
  );
};
