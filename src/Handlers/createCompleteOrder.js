const postCompleteOrder = require("../Controllers/postCompleteOrder");
const getByIdOrder = require("../Controllers/getByIdOrders");
const createCompleteOrder = async (req, res) => {
  const { drinks, deserts, dishSide, userId } = req.body;

  try {
    const completeOrder = { drinks, deserts, dishSide, userId };

    // console.log(completeOrder.drinks[2]);
    // const order = await getByIdOrder(completeOrder.drinks[0]);
    // console.log(order.drinkName);

    const newCompleteOrder = await postCompleteOrder(completeOrder);

    return res.status(201).json(newCompleteOrder);
  } catch (error) {
    return res.status(200).json({ error: error.message });
  }
};

module.exports = createCompleteOrder;
