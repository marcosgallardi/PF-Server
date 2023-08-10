const { User } = require("../../db");

const getCartByUserId = async (userId) => {
  // console.log("CONTROLLER_____USER____ID", userId);
  const user = await User.findByPk(userId);
  if (!user) {
    // Si no se encuentra el usuario, significa que aún no tiene un carrito
    return { success: true, message: "Usuario no encontrado" };
  }

  const cart = await user.getCart();
  if (!cart) {
    return { success: false, cart: [] };
  }
  return { success: true, cart: cart.cartItems };
};
module.exports = getCartByUserId;
