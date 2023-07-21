const { Router } = require("express");

const sideRouter = Router();
const sides = require("../Handlers/sides");
const createSide = require("../Handlers/createSide");

/**
 * @swagger
 * components:
 *  schemas:
 *    Side:
 *      type: object
 *      properties:
 *          id:
 *           type: string
 *           format: uuid 
 *           description: side id
 *          name:
 *           type: string
 *           description: side name
 *          type:
 *           type: string
 *           description: side type
 *          available:
 *           type: boolean
 *           description: side available
 *          price:
 *           type: integer
 *           description: side price
 *          image: 
 *           type: string
 *           description: side image
 *       required:
 *        - name
 *        - type
 *        - available
 *        - price
 *       example:
 *          name: napolitana
 *          type: salsa
 *          available: true
 *          price: 1500
 *            
 *           
 *            
 */

/**
 * @swagger
 * /side:
 *  get:
 *    summary: bring all side
 *    tags: [Side]
 *    responses: 
 *      200:
 *        description: returns all side
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Side'
 */
sideRouter.get("/", sides);

sideRouter.get("/:id", (req, res) => {
  res.status(200).send("obtengo el side de id ");
});

/**
 * @swagger
 * /side:
 *  post:
 *    summary: create a new side
 *    tags: [Side]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Side'
 *    responses: 
 *      200:
 *        description: successfully created Side
 */

sideRouter.post("/", createSide);

module.exports = sideRouter;
