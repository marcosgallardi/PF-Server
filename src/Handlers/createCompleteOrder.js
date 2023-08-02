const postCompleteOrder = require("../Controllers/postCompleteOrder");
const getByIdOrder = require("../Controllers/getByIdOrders");
const getUserIdFromDatabase = require("../functions/getUserIdByEmail");

const createCompleteOrder = async (req, res) => {
  const { order } = req.body;

  try {
    let userId = "";

    if (req.user.source === "firebase") {
      userId = await getUserIdFromDatabase(req.user.email);
    } else if (req.user.source === "database") {
      userId = req.user.userId;
    } else {
      res.status(400).json({ error: "Error al obtener el usuario" });
    }

    const newCompleteOrder = await postCompleteOrder({ order, userId });

    return res.status(201).json(newCompleteOrder);
  } catch (error) {
    return res.status(200).json({ error: error.message });
  }
};

module.exports = createCompleteOrder;
