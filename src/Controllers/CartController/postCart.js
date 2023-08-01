const { User, Cart } = require("../../db");

const postCart = async (userId, cartItems) => {
  console.log("___CONTROLLER___USER__ID__", userId);
     // Encuentra el usuario en la base de datos
     const user = await User.findByPk(userId);
      console.log("___CONTROLLER___USER____", user);
     // Si el usuario no existe, responder con un error
     if (!user) {
       return { success: false, message: 'Usuario no encontrado' };
     }
 
     // Busca el carrito del usuario en la base de datos
     let cart = await user.getCart();
 
     // Si el usuario no tiene un carrito, crea uno nuevo y asígnalo al usuario
     if (!cart) {
       cart = await Cart.create({ cartItems });
       await user.setCart(cart);
     } else {
       // Si el usuario ya tiene un carrito, actualiza el contenido del carrito
       cart.cartItems = cartItems;
       await cart.save();
     }
 
 
  return cart;
};

module.exports = postCart;
