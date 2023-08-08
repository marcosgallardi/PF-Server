const getCartByUserId = require("../../Controllers/CartController/getCartById");
const getUserIdFromDatabase = require('../../functions/getUserIdByEmail');

const cartById = async (req, res) => {
  try {
    let userId = '';

    if (req.user.source === 'firebase') {
      const userDB = await getUserIdFromDatabase(req.user.email);
      userId = userDB.id;
    } else if (req.user.source === 'database') {
      userId = req.user.userId;
    } else {
      return res.status(400).json({ message: 'Error al obtener el usuario' });
    }

    // console.log("USER ID DB_____", userId);
    
    const cart = await getCartByUserId(userId);

    if (!cart) {
      return res.status(404).json({ message: 'No se encontró el carrito para el usuario' });
    }

    // console.log("_____HANDLER_______", cart);
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = cartById;

