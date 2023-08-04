const { User } = require('../db');
async function getUserIdFromDatabase(email) {
    try {
      const user = await User.findOne({
        where: {
          email,
        },
      });
  
      if (user) {
        return user; // Retorna el usuario encontrado en la base de datos
      } else {
        return null; // No se encontró el id de usuario en la base de datos
      }
    } catch (error) {
      console.log('Error al buscar el usuario en la base de datos:', error.message);
      throw error;
    }
  }

  module.exports = getUserIdFromDatabase;