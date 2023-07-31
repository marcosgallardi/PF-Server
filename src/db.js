require("dotenv").config();
const { Sequelize } = require("sequelize");

const fs = require("fs");
const path = require("path");

const { DB_USER, DB_PASSWORD, DB_HOST, DATABASE_URL } = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/pf_elfestin`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});
// const sequelize = new Sequelize(DATABASE_URL, {
//   logging: false, // set to console.log to see the raw SQL queries   native: false, // lets Sequelize know we can use pg-native for ~30% more speed
// });
// const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DATABASE_URL}/elfestin`, {
//   logging: false, // set to console.log to see the raw SQL queries
//   native: false, // lets Sequelize know we can use pg-native for ~30% more speed
// });
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter((file) => file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js")
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const {
  Dish,
  Drink,
  Desert,
  Side,
  Dish_side,
  User,
  Order,
  DrinkOrder,
  DesertOrder,
  OrderSide,
  SideOrder,
  DishSideOrder,
  DishOrder,
  CompleteOrder,
  Banner,
  Ticket,
  Comment,
  Local,
  Cart,
} = sequelize.models;

// Establece la asociación de uno a uno (1:1) entre User y Cart
User.hasOne(Cart); // Un usuario puede tener un carrito
Cart.belongsTo(User); // Un carrito pertenece a un usuario


// Aca vendrian las relaciones

Comment.belongsTo(Dish);
Comment.belongsTo(User);

Dish.hasMany(Comment);

User.hasMany(Comment); // Establece una relación de uno a muchos con el modelo "Comment"


Dish.prototype.calculateAverageRating = async function () {
  const ratings = await Comment.findAll({
    attributes: [[sequelize.fn("AVG", sequelize.col("rating")), "averageRating"]],
    where: {
      DishId: this.id,
    },
  });
  const averageRating = parseFloat(ratings[0].dataValues.averageRating) || 0;
  const roundedRating = Math.round(averageRating);

  return roundedRating;
};

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
