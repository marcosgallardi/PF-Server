const postCompleteOrder = require("../Controllers/postCompleteOrder");
const getByIdOrder = require("../Controllers/getByIdOrders");
const getUserIdFromDatabase = require("../functions/getUserIdByEmail");
const webHookMP = require("../Notification/webHookMP");

const createCompleteOrder = async (req, res) => {
  const { order } = req.body;

  try {
    // const status = await webHookMP();

    let userId = "";

    if (req.user.source === "firebase") {
      userId = await getUserIdFromDatabase(req.user.email);
    } else if (req.user.source === "database") {
      userId = req.user.userId;
    } else {
      res.status(400).json({ error: "Error al obtener el usuario" });
    }

    const newCompleteOrder = await postCompleteOrder({ order, userId });

    // console.log('ORDER HANDLER CREATE__', newCompleteOrder);

    return res.status(201).json(newCompleteOrder);
  } catch (error) {
    return res.status(200).json({ error: error.message });
  }
};

module.exports = createCompleteOrder;
