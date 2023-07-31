const putCart = require("../../Controllers/CartController/putCart");
const getUserIdFromDatabase = require('../../functions/getUserIdByEmail');

const updateCart = async (req, res) => {

  try {

    const { cartItems } = req.body; 

    let userId = '';

    if (req.user.source === 'firebase') {
      userId = await getUserIdFromDatabase(req.user.email);
    } else if (req.user.source === 'database') {
      userId = req.user.userId;
    } else {
      return res.status(400).json({ error: 'Error al obtener el usuario' });
    }

    console.log("USER ID DB_____", userId);

  
    const newCartItems = cartItems
    const updatedCart = await putCart(userId, newCartItems);

    console.log("UPDATE CART_____", updatedCart);

    res.status(200).json(updatedCart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = updateCart;
