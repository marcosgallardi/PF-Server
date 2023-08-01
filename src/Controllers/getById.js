const { Dish, Drink, Desert, Side, User, Order, Dish_side, Comment } = require("../db");
const { Op } = require("sequelize");

const getById = async (id) => {
  const searchDish = await Dish.findOne({
    where: {
      id: id,
    },
    include: {
      model: Comment, // Incluimos el modelo Comment en la consulta
      attributes: ['id', 'content', 'createdAt', 'rating'], // Especificamos qué atributos de Comment queremos obtener
      include: {
        model: User, // Incluimos el modelo User en la consulta de Comment
        attributes: ['id', 'name'], // Especificamos qué atributos de User queremos obtener
      },
    },
  });
     // Si el objeto obtenido es un plato (Dish), calcula el rating total antes de enviar la respuesta
     if (searchDish instanceof Dish) {
      const totalRating = await searchDish.calculateAverageRating();
      searchDish.dataValues.totalRating = totalRating;
    }
  
  if (searchDish) return searchDish;

  const searchDesert = await Desert.findOne({
    where: {
      id: id,
    },
  });
  if (searchDesert) return searchDesert;

  const searchSide = await Side.findOne({
    where: {
      id: id,
    },
  });
  if (searchSide) return searchSide;

  const searchDrink = await Drink.findOne({
    where: {
      id: id,
    },
  });
  if (searchDrink) return searchDrink;

  const searchUser = await User.findOne({
    where: {
      id: id,
    },
    include: {
      model: Comment, // Incluimos el modelo Comment en la consulta
      attributes: ['id', 'content', 'createdAt', 'rating'], // Especificamos qué atributos de Comment queremos obtener
      include: {
        model: Dish, // Incluimos el modelo Dish en la consulta de Comment
        attributes: ['id', 'name'], // Especificamos qué atributos de Dish queremos obtener
      },
    },
  });
  if (searchUser) return searchUser;

  const searchOrder = await Order.findOne({
    where: {
      idPedido: id,
    },
  });
  if (searchOrder) return searchOrder;

  const searchDish_side = await Dish_side.findOne({
    where: {
      id: id,
    },
  });
  if (searchDish_side) return searchDish_side;
  else {
    throw Error("id no encontrada");
  }
};

module.exports = getById;
