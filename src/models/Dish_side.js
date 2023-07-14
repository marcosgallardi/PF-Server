const { DataTypes } = require("sequelize");

module.exports = (sequelize) =>{
    sequelize.define(
        'dish_side',
        {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            unique: true,
            },
        dishId:{
            type: DataTypes.INTEGER,
            references:{
                model:'Dishes',
                key:'id'
            }
        },
        sideId:{
            type: DataTypes.INTEGER,
            references:{
                model:'Sides',
                key:'id'
            }
        },
        },
        {
            timestamps: false,
          }
    )
}