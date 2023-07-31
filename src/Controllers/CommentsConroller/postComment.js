const { User, Dish } = require("../../db");

const postComment = async (userId, dishId, rating, comment) => {
    const user = await User.findByPk(userId);
    if (!user) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    // Verificar si el plato existe
    const dish = await Dish.findByPk(dishId);
    if (!dish) {
        return res.status(404).json({ message: 'Plato no encontrado' });
    }

    // Crear el comentario utilizando la asociación con el modelo User
    const newComment = await user.createComment({
        content: comment,
        rating: rating,
        DishId: dishId,
    });
    return newComment;
}

module.exports = postComment;