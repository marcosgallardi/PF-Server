const { Router } = require("express");
const desert = require("../Handlers/desert");
const desertRouter = Router();
const createDesert = require("../Handlers/createDesert");


/**
 * @swagger
 * components:
 *  schemas:
 *    Desert:
 *      type: object
 *      properties:
 *          id:
 *           type: string
 *           format: uuid 
 *           description: desert id
 *          name:
 *           type: string
 *           description: desert name
 *          stock:
 *           type: integer
 *           description: desert stock
 *          price:
 *           type: integer
 *           description: desert price
 *          image: 
 *           type: string
 *           description: desert image
 *       required:
 *        - name
 *        - stock
 *        - price
 *       example:
 *          name: helado
 *          stock: 20
 *          price: 1500
 */

/**
 * @swagger
 * /desert:
 *  get:
 *    summary: bring desserts by name or all
 *    tags: [Desert]
 *    responses: 
 *      200:
 *        description: returns dessert by name or all
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Desert'
 */
desertRouter.get("/", desert);

desertRouter.get("/:id", (req, res) => {
  res.status(200).send("obtengo el desert de id ");
});


/**
 * @swagger
 * /desert:
 *  post:
 *    summary: create a new dessert
 *    tags: [Desert]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Desert'
 *    responses: 
 *      200:
 *        description: successfully created dessert
 */

desertRouter.post("/", createDesert);

module.exports = desertRouter;








