const { Router } = require("express");
const {
  handlerRestoredUser,
  handlerRestoredDish,
  handlerRestoredDrink,
  handlerRestoredDesert,
  handlerRestoredSide,
  handlerRestoredDishSide,
  handlerRestoredOrder,
 // handlerRestoredDrinkOrder,
  handlerRestoredDesertOrder,
  handlerRestoredOrderSide,
  handlerRestoredSideOrder,
  handlerRestoredDishSideOrder,
  handlerRestoredDishOrder,
  handlerRestoredCompleteOrder,
} = require("../Handlers/handlersRestore.js");
const restoreRouter = Router();


// Ruta para restaurar un usuario
restoreRouter.put("/user/:id", handlerRestoredUser);

// Ruta para restaurar un plato
restoreRouter.put("/dish/:id", handlerRestoredDish);

// Ruta para restaurar una bebida
restoreRouter.put("/drink/:id", handlerRestoredDrink);

// Ruta para restaurar un postre
restoreRouter.put("/desert/:id", handlerRestoredDesert);

// Ruta para restaurar un acompañamiento
restoreRouter.put("/side/:id", handlerRestoredSide);

// Ruta para restaurar un plato con acompañamiento
restoreRouter.put("/dish-side/:id", handlerRestoredDishSide);

// Ruta para restaurar una orden
restoreRouter.put("/order/:id", handlerRestoredOrder);

// Ruta para restaurar una bebida en una orden, pero desabilitado por ahora.
// restoreRouter.put("/drink-order/:id", handlerRestoredDrinkOrder); 

// Ruta para restaurar un postre en una orden
restoreRouter.put("/desert-order/:id", handlerRestoredDesertOrder);

// Ruta para restaurar un acompañamiento en una orden
restoreRouter.put("/order-side/:id", handlerRestoredOrderSide);

// Ruta para restaurar un acompañamiento en una orden
restoreRouter.put("/side-order/:id", handlerRestoredSideOrder);

// Ruta para restaurar un plato con acompañamiento en una orden
restoreRouter.put("/dish-side-order/:id", handlerRestoredDishSideOrder);

// Ruta para restaurar un plato en una orden
restoreRouter.put("/dish-order/:id", handlerRestoredDishOrder);

// Ruta para restaurar una orden completa
restoreRouter.put("/complete-order/:id", handlerRestoredCompleteOrder);

module.exports = restoreRouter;
