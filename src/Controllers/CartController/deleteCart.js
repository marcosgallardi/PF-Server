const { User } = require('../../db')

const deleteCart = async (userId) => {
      
    // Buscamos al usuario por su ID y aseguramos que exista
    const user = await User.findByPk(userId);
    if (!user) {
      throw new Error("Usuario no encontrado");
    }

    // Accedemos al carrito asociado al usuario a través de la asociación
    const cart = await user.getCart();
        

      if (!cart) {
        // Si no existe el carrito, retornamos un mensaje indicando que ya ha sido eliminado
        throw Error({ message: "El carrito no existe o ya ha sido eliminado" });
      }
      // Si el carrito existe, lo eliminamos de la base de datos
      await cart.destroy();
      return ({ message: "Carrito eliminado exitosamente" });
}

module.exports = deleteCart;