const postCompleteOrder = require("../Controllers/postCompleteOrder");
const getByIdOrder = require("../Controllers/getByIdOrders");
const webHookMP = require('../Notification/webHookMP');
const createCompleteOrder = async (req, res) => {
  const { order, userId } = req.body;
  const status = await webHookMP();
  try {
    console.log('statussssssssssssssssssssssssssssssssss',status)
    const completeOrder = { order };

    const newCompleteOrder = await postCompleteOrder({ order, userId });

    return res.status(201).json(newCompleteOrder);
  } catch (error) {
    return res.status(200).json({ error: error.message });
  }
};

module.exports = createCompleteOrder;
