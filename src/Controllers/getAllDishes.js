const { Dish, User, Comment } = require("../db");

const getAllDishes = async () => {
  const dishes = await Dish.findAll({
    include: {
      model: Comment, // Incluimos el modelo Comment en la consulta
      attributes: ['id', 'content', 'createdAt', 'rating'], // Especificamos qué atributos de Comment queremos obtener
      include: {
        model: User, // Incluimos el modelo User en la consulta de Comment
        attributes: ['id', 'name'], // Especificamos qué atributos de User queremos obtener
      },
    },
  });
  for (let i = 0; i < dishes.length; i++) {
    const dish = dishes[i];

    // Si el plato tiene comentarios (reviews), calcula el rating total antes de devolverlo
    if (dish.Comments && dish.Comments.length > 0) {
      const totalRating = await dish.calculateAverageRating();
      dish.dataValues.totalRating = totalRating;
    }
  }

  if (dishes.length > 0) return dishes;
  else throw Error("No dishes found");
};

module.exports = getAllDishes;
