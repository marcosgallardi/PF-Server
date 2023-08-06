const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Reservation",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        primaryKey: true,
      },
      // idUser: {
      //   type: DataTypes.UUID,
      //   references: {
      //     model: "Users",
      //     key: "id",
      //   },
      // },
      name:{
        type: DataTypes.STRING,
        allowNull: false
      },
      lastName:{
        type: DataTypes.STRING,
        allowNull: false
      },
      quantity:{
        type:DataTypes.INTEGER,
        allowNull:false,
      },
      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          is: /^\+?[0-9\-()\s]+$/,
        },
    },
    confirmation: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
},
      eventDate: {
            type: DataTypes.DATE, 
            allowNull: false,
          },
        zone: {
            type: DataTypes.STRING,
        allowNull: false
        }, 
        decor: {
            type: DataTypes.STRING,
        allowNull: false
        }, 
        honoree: {
            type: DataTypes.STRING,
        allowNull: false
        }, 

    },
  
    {

      timestamps: false,
    }

  );
};