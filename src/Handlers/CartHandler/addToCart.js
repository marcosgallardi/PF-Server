const postCart = require('../../Controllers/CartController/postCart');
const getUserIdFromDatabase = require('../../functions/getUserIdByEmail');

const addToCart = async (req, res) => {
  try {
    const { cartItems } = req.body; 

    console.log("__________________CART ITEMS____________________", cartItems);

    let userId = '';

    if (req.user.source === 'firebase') {
      const userDB = await getUserIdFromDatabase(req.user.email);
      userId = userDB.id;
    } else if (req.user.source === 'database') {
      userId = req.user.userId;
    } else {
      return res.status(400).json({ success: false, message: 'Error al obtener el usuario' });
    }

    console.log("_____HANDLER___USER ID_____", userId);
    console.log("_____HANDLER____CART_____", cartItems);

    const newCart = await postCart(userId, cartItems);
    console.log("_____HANDLER___NEW CART______", newCart);

    if (!newCart) {
      return res.status(500).json({ success: false, message: 'Error al guardar el carrito en la base de datos' });
    }

    res.status(201).json({ success: true, message: 'Elementos agregados al carrito', cart: newCart });
  } catch (error) {
    console.error('Error al agregar elementos al carrito:', error);
    res.status(500).json({ success: false, message: 'Error al agregar elementos al carrito' });
  }
};

module.exports = addToCart;
