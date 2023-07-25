const postCompleteOrder = require("../Controllers/postCompleteOrder");
const getByIdOrder = require("../Controllers/getByIdOrders");
const createCompleteOrder = async (req, res) => {
  const { order, userId } = req.body;

  // console.log('___________HANDLER CREATE_____________');
  // console.log("ORDER", order);
  // console.log("USERID", userId);
  // console.log("ORDER DESSERT", order[0].desserts);
  try {
    const completeOrder = { order };
    // console.log(completeOrder);

    // console.log(completeOrder.drinks[2]);
    // const order = await getByIdOrder(completeOrder.drinks[0]);
    // console.log(order.drinkName);

    const newCompleteOrder = await postCompleteOrder({ order, userId });

    console.log('ORDER HANDLER CREATE____', newCompleteOrder);

    return res.status(201).json(newCompleteOrder);
  } catch (error) {
    return res.status(200).json({ error: error.message });
  }
};

module.exports = createCompleteOrder;
