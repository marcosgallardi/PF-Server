const { Router } = require("express");
const drinks = require("../Handlers/drinks");
const createDrink = require("../Handlers/createDrink");
const drinkRouter = Router();

// /**
//  * @swagger
//  * components:
//  *  schemas:
//  *    Drink:
//  *      type: object
//  *      properties:
//  *          id:
//  *           type: string
//  *           format: uuid
//  *           description: drink id
//  *          name:
//  *           type: string
//  *           description: drink name
//  *          type:
//  *           type: string
//  *           description: drink type
//  *          volume:
//  *           type: string
//  *           description: drink volume
//  *          alcohol:
//  *           type: boolean
//  *           description: drink alcohol
//  *          stock:
//  *           type: number
//  *           description: drink stock
//  *          price:
//  *           type: integer
//  *           description: drink price
//  *          image:
//  *           type: string
//  *           description: drink image
//  *       required:
//  *        - name
//  *        - type
//  *        - volume
//  *        - alcohol
//  *        - stock
//  *        - price
//  *       example:
//  *        name: coca cola
//  *        type: gaseosa
//  *        volume: 750ml
//  *        alcohol: false
//  *        stock: 50
//  *        price: 1000
//  */

// /**
//  * @swagger
//  * /drink:
//  *  get:
//  *    summary: bring drinks by name or all
//  *    tags: [Drink]
//  *    responses:
//  *      200:
//  *        description: returns drinks by name or all
//  *        content:
//  *          application/json:
//  *            schema:
//  *              type: array
//  *              items:
//  *                $ref: '#/components/schemas/Drink'
//  */
drinkRouter.get("/", drinks);

drinkRouter.get("/:id", (req, res) => {
  res.status(200).send("obtengo el drink de id ");
});

// /**
//  * @swagger
//  * /drink:
//  *  post:
//  *    summary: create a new drink
//  *    tags: [Drink]
//  *    requestBody:
//  *      required: true
//  *      content:
//  *        application/json:
//  *          schema:
//  *            $ref: '#/components/schemas/Drink'
//  *    responses:
//  *      200:
//  *        description: successfully created drink
//  */
drinkRouter.post("/", createDrink);

module.exports = drinkRouter;
