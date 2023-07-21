const { Router } = require("express");

const gralRouter = Router();
const searchByName = require("../Handlers/searchByName");
const searchById = require("../Handlers/searchById");

/**
 * @swagger
 * /id/{id}:
 *  get:
 *    summary: brings me what I give it for id
 *    tags: [Dish, Drink, Desert, User, Side]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: the id
 *    responses: 
 *      200:
 *        description: returns what I give it for id
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Response'
 */

/**
 * @swagger
 * components:
 *  schemas:
 *    Response:
 *      type: object
 *      properties:
 *        data:
 *          type: object
 *          description: Data returned for the provided id
 *          example:
 *            name: "Napolitana"
 *            type: "Dessert"
 *            available: true
 *            price: 1500
 *            image: "napolitana.jpg"
 */

gralRouter.get("/:id", searchById);

module.exports = gralRouter;
