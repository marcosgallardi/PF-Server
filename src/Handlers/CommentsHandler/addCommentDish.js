const postComment = require("../../Controllers/CommentsConroller/postComment");

const addCommentDish = async (req, res) => {
    try {
        const { userId, dishId, rating, comment } = req.body;

        const newComment = await postComment(userId, dishId, rating, comment)
       

        // Devuelve el objeto de comentario
        return res.status(201).json({ comment: newComment });
    } catch (error) {
        // Manejo de errores
        console.error('Error al guardar el comentario:', error);
        return res.status(500).json({ message: 'Error al guardar el comentario' });
    }
}
module.exports = addCommentDish;