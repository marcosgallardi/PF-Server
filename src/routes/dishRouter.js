const { Router } = require("express");

const createDish = require("../Handlers/createDish");
const dishes = require("../Handlers/dishes");
const dishRouter = Router();

// /**
//  * @swagger
//  * components:
//  *  schemas:
//  *    Dish:
//  *      type: object
//  *      properties:
//  *          id:
//  *           type: string
//  *           format: uuid
//  *           description: dish id
//  *          name:
//  *           type: string
//  *           description: dish name
//  *          description:
//  *           type: string
//  *           description: dish description
//  *          type:
//  *           type: string
//  *           description: dish type
//  *          subtype:
//  *           type: string
//  *           description: dish subtype
//  *          disabled:
//  *           type: boolean
//  *           description: dish disabled
//  *          available:
//  *           type: boolean
//  *           description: dish available
//  *          calories:
//  *           type: integer
//  *           description: dish calories
//  *          glutenfree:
//  *           type: boolean
//  *           description: dish glutenfree
//  *          vegetarian:
//  *           type: boolean
//  *           description: dish vegetarian
//  *          dailyspecial:
//  *           type: boolean
//  *           description: dish dailyspecial
//  *          price:
//  *           type: number
//  *           description: dish price
//  *          image:
//  *           type: string
//  *           description: dish image
//  *       required:
//  *        - name
//  *        - description
//  *        - type
//  *        - subtype
//  *        - disabled
//  *        - available
//  *        - calories
//  *        - glutenfree
//  *        - vegetarian
//  *        - dailyspecial
//  *        - price
//  *       example:
//  *        name: milanesa
//  *        description: rich chicken milanese
//  *        type: plato principal
//  *        subtype: carnes
//  *        disabled: true
//  *        available: true
//  *        calories: 1000
//  *        glutenfree: true
//  *        vegetarian: true
//  *        dailyspecial: false
//  *        price: 2200
//  */

// /**
//  * @swagger
//  * /dish:
//  *  post:
//  *    summary: create a new dish
//  *    tags: [Dish]
//  *    requestBody:
//  *      required: true
//  *      content:
//  *        application/json:
//  *          schema:
//  *            $ref: '#/components/schemas/Dish'
//  *    responses:
//  *      200:
//  *        description: successfully created dish
//  */
dishRouter.post("/", createDish);

// /**
//  * @swagger
//  * /dish:
//  *  get:
//  *    summary: bring dishes by name or all
//  *    tags: [Dish]
//  *    responses:
//  *      200:
//  *        description: returns dishes by name or all
//  *        content:
//  *          application/json:
//  *            schema:
//  *              type: array
//  *              items:
//  *                $ref: '#/components/schemas/Dish'
//  */
dishRouter.get("/", dishes);

dishRouter.get("/:id", (req, res) => {
  res.status(200).send(`Obtener el plato con ID ${req.params.id}`);
});

module.exports = dishRouter;
