const { User } = require("../../db");

const putCart = async (userId, newCartItems) => {
  try {

    // Buscamos al usuario por su ID y aseguramos que exista
    const user = await User.findByPk(userId);
    if (!user) {
      throw new Error("Usuario no encontrado");
    }

    // Accedemos al carrito asociado al usuario a través de la asociación
    const cart = await user.getCart();

    if (!cart) {
      // Si no existe un carrito, creamos uno nuevo para el usuario y le asignamos los nuevos items
      const newCart = await user.createCart({ cartItems: newCartItems });
      return newCart;
    } else {
      // Si el carrito ya existe, actualizamos sus items con los nuevos recibidos en la solicitud
      cart.cartItems = newCartItems;
      await cart.save();
      return cart;
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = putCart;
