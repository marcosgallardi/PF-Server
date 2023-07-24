const { Router } = require("express");
const {userDelete, dishDelete, drinkDelete, desertDelete, sideDelete, dishSideDelete, orderDelete,/* drinkOrderDelete, */desertOrderDelete, orderSideDelete, sideOrderDelete, dishSideOrderDelete, dishOrderDelete, completeOrderDelete} = require("../Handlers/handlersDelete.js");
const gralRouter = Router();
const searchByName = require("../Handlers/searchByName");
const searchById = require("../Handlers/searchById");


// /**
//  * @swagger
//  * /id/{id}:
//  *  get:
//  *    summary: brings me what I give it for id
//  *    tags: [Dish, Drink, Desert, User, Side]
//  *    parameters:
//  *      - in: path
//  *        name: id
//  *        schema:
//  *          type: string
//  *        required: true
//  *        description: the id
//  *    responses:
//  *      200:
//  *        description: returns what I give it for id
//  *        content:
//  *          application/json:
//  *            schema:
//  *              $ref: '#/components/schemas/Response'
//  */

// /**
//  * @swagger
//  * components:
//  *  schemas:
//  *    Response:
//  *      type: object
//  *      properties:
//  *        data:
//  *          type: object
//  *          description: Data returned for the provided id
//  *          example:
//  *            name: "Napolitana"
//  *            type: "Dessert"
//  *            available: true
//  *            price: 1500
//  *            image: "napolitana.jpg"
//  */

gralRouter.get("/:id", searchById);

gralRouter.delete("/user/:id", userDelete);

gralRouter.delete("/dish/:id", dishDelete);

gralRouter.delete("/drink/:id", drinkDelete);

gralRouter.delete("/desert/:id", desertDelete);

gralRouter.delete("/side/:id", sideDelete);

gralRouter.delete("/dish-side/:id", dishSideDelete);

gralRouter.delete("/order/:id", orderDelete);
// desabilitada por ahora
// gralRouter.delete("/drink-order/:id", drinkOrderDelete);

gralRouter.delete("/desert-order/:id", desertOrderDelete);

gralRouter.delete("/order-side/:id", orderSideDelete);

gralRouter.delete("/side-order/:id", sideOrderDelete);

gralRouter.delete("/dish-side-order/:id", dishSideOrderDelete);

gralRouter.delete("/dish-order/:id", dishOrderDelete);

gralRouter.delete("/complete-order/:id", completeOrderDelete);

module.exports = gralRouter;





