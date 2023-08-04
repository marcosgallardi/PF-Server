const deleteCart = require("../../Controllers/CartController/deleteCart");
const getUserIdFromDatabase = require('../../functions/getUserIdByEmail');

const deleteCartById = async (req, res) => {
  try {
    let userId = '';

    if (req.user.source === 'firebase') {
      const userDB = await getUserIdFromDatabase(req.user.email);
      userId = userDB.id;
    } else if (req.user.source === 'database') {
      userId = req.user.userId;
    } else {
      return res.status(400).json({ error: 'Error al obtener el usuario' });
    }

    console.log("USER ID DB_____", userId);

    const cartDeleted = await deleteCart(userId);

    res.status(201).json(cartDeleted.message)

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = deleteCartById;
