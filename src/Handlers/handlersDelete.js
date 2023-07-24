const {
    deleteDish,
    deleteDrink,
    deleteDesert,
    deleteSide,
    deleteDishSide,
    deleteUser,
    deleteOrder,
    deleteDrinkOrder,
    deleteDesertOrder,
    deleteOrderSide,
    deleteSideOrder,
    deleteDishSideOrder,
    deleteDishOrder,
    deleteCompleteOrder,
  } = require("../Controllers/controllerDelete");
  
  const userDelete = async (req, res) => {
    try {
      const { id } = req.params;
      const userDele = await deleteUser(id);
      res.status(200).json(userDele);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  const dishDelete = async (req, res) => {
    try {
      const { id } = req.params;
      const dishDele = await deleteDish(id);
      res.status(200).json(dishDele);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  const drinkDelete = async (req, res) => {
    try {
      const { id } = req.params;
      const drinkDele = await deleteDrink(id);
      res.status(200).json(drinkDele);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  const desertDelete = async (req, res) => {
    try {
      const { id } = req.params;
      const desertDele = await deleteDesert(id);
      res.status(200).json(desertDele);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  const sideDelete = async (req, res) => {
    try {
      const { id } = req.params;
      const sideDele = await deleteSide(id);
      res.status(200).json(sideDele);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  const dishSideDelete = async (req, res) => {
    try {
      const { id } = req.params;
      const dishSideDele = await deleteDishSide(id);
      res.status(200).json(dishSideDele);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  const orderDelete = async (req, res) => {
    try {
      const { id } = req.params;
      const orderDele = await deleteOrder(id);
      res.status(200).json(orderDele);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  const drinkOrderDelete = async (req, res) => {
    try {
      const { id } = req.params;
      const drinkOrderDele = await deleteDrinkOrder(id);
      res.status(200).json(drinkOrderDele);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  const desertOrderDelete = async (req, res) => {
    try {
      const { id } = req.params;
      const desertOrderDele = await deleteDesertOrder(id);
      res.status(200).json(desertOrderDele);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  const orderSideDelete = async (req, res) => {
    try {
      const { id } = req.params;
      const orderSideDele = await deleteOrderSide(id);
      res.status(200).json(orderSideDele);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  const sideOrderDelete = async (req, res) => {
    try {
      const { id } = req.params;
      const sideOrderDele = await deleteSideOrder(id);
      res.status(200).json(sideOrderDele);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  const dishSideOrderDelete = async (req, res) => {
    try {
      const { id } = req.params;
      const dishSideOrderDele = await deleteDishSideOrder(id);
      res.status(200).json(dishSideOrderDele);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  const dishOrderDelete = async (req, res) => {
    try {
      const { id } = req.params;
      const dishOrderDele = await deleteDishOrder(id);
      res.status(200).json(dishOrderDele);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  const completeOrderDelete = async (req, res) => {
    try {
      const { id } = req.params;
      const completeOrderDele = await deleteCompleteOrder(id);
      res.status(200).json(completeOrderDele);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  module.exports = {
    userDelete,
    dishDelete,
    drinkDelete,
    desertDelete,
    sideDelete,
    dishSideDelete,
    orderDelete,
    drinkOrderDelete,
    desertOrderDelete,
    orderSideDelete,
    sideOrderDelete,
    dishSideOrderDelete,
    dishOrderDelete,
    completeOrderDelete,
  };
  
  