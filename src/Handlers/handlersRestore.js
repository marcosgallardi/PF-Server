const {
  restoreDish,
  restoreDrink,
  restoreDesert,
  restoreSide,
  restoreDishSide,
  restoreUser,
  restoreOrder,
  restoreDrinkOrder,
  restoreDesertOrder,
  restoreOrderSide,
  restoreSideOrder,
  restoreDishSideOrder,
  restoreDishOrder,
  restoreCompleteOrder,
} = require("../Controllers/controllersRestore");

const handlerRestoredUser = async (req, res) => {
  try {
    const { id } = req.params;
    const userRes = await restoreUser(id);
    res.status(200).json(userRes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const handlerRestoredDish = async (req, res) => {
  try {
    const { id } = req.params;
    const dishRes = await restoreDish(id);
    res.status(200).json(dishRes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const handlerRestoredDrink = async (req, res) => {
  try {
    const { id } = req.params;
    const drinkRes = await restoreDrink(id);
    res.status(200).json(drinkRes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const handlerRestoredDesert = async (req, res) => {
  try {
    const { id } = req.params;
    const desertRes = await restoreDesert(id);
    res.status(200).json(desertRes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const handlerRestoredSide = async (req, res) => {
  try {
    const { id } = req.params;
    const sideRes = await restoreSide(id);
    res.status(200).json(sideRes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const handlerRestoredDishSide = async (req, res) => {
  try {
    const { id } = req.params;
    const dishSideRes = await restoreDishSide(id);
    res.status(200).json(dishSideRes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const handlerRestoredOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const orderRes = await restoreOrder(id);
    res.status(200).json(orderRes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const handlerRestoredDrinkOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const drinkOrderRes = await restoreDrinkOrder(id);
    res.status(200).json(drinkOrderRes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const handlerRestoredDesertOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const desertOrderRes = await restoreDesertOrder(id);
    res.status(200).json(desertOrderRes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const handlerRestoredOrderSide = async (req, res) => {
  try {
    const { id } = req.params;
    const orderSideRes = await restoreOrderSide(id);
    res.status(200).json(orderSideRes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const handlerRestoredSideOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const sideOrderRes = await restoreSideOrder(id);
    res.status(200).json(sideOrderRes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const handlerRestoredDishSideOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const dishSideOrderRes = await restoreDishSideOrder(id);
    res.status(200).json(dishSideOrderRes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const handlerRestoredDishOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const dishOrderRes = await restoreDishOrder(id);
    res.status(200).json(dishOrderRes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const handlerRestoredCompleteOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const completeOrderRes = await restoreCompleteOrder(id);
    res.status(200).json(completeOrderRes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  handlerRestoredUser,
  handlerRestoredDish,
  handlerRestoredDrink,
  handlerRestoredDesert,
  handlerRestoredSide,
  handlerRestoredDishSide,
  handlerRestoredOrder,
  handlerRestoredDrinkOrder,
  handlerRestoredDesertOrder,
  handlerRestoredOrderSide,
  handlerRestoredSideOrder,
  handlerRestoredDishSideOrder,
  handlerRestoredDishOrder,
  handlerRestoredCompleteOrder,
};

  