const postCompleteOrder = require("../Controllers/postCompleteOrder");
const getByIdOrder = require("../Controllers/getByIdOrders");

const { use } = require("../routes/completeOrderRouter");
const createCompleteOrder = async (req, res) => {
  const { order, userId } = req.body;

  try {
    const completeOrder = { order };

    // console.log(completeOrder.drinks[2]);
    // const order = await getByIdOrder(completeOrder.drinks[0]);
    // console.log(order.drinkName);

    const newCompleteOrder = await postCompleteOrder({ order, userId });

    return res.status(201).json(newCompleteOrder);
  } catch (error) {
    return res.status(200).json({ error: error.message });
  }
};

module.exports = createCompleteOrder;
