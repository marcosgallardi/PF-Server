const { Router } = require("express");

const userRouter = Router();
const users = require("../Handlers/users");
const createUser = require("../Handlers/createUser");

// /**
//  * @swagger
//  * components:
//  *  schemas:
//  *    User:
//  *      type: object
//  *      properties:
//  *        id:
//  *          type: string
//  *          format: uuid
//  *          description: user id
//  *        name:
//  *          type: string
//  *          description: user name
//  *        lastname:
//  *          type: string
//  *          description: user lastname
//  *        email:
//  *          type: string
//  *          description: user email
//  *        password:
//  *          type: string
//  *          description: user password
//  *        birthdate:
//  *          type: string
//  *          description: user birthdate
//  *        phonenumber:
//  *          type: string
//  *          description: user phonenumber
//  *      required:
//  *        - name
//  *        - lastname
//  *        - email
//  *        - password
//  *        - birthdate
//  *        - phonenumber
//  *      example:
//  *        id: 123e4567-e89b-12d3-a456-426655440000
//  *        name: jose
//  *        lastname: lopez
//  *        email: jose@email.com
//  *        password: 123456
//  *        birthdate: 1992-02-15
//  *        phonenumber: "05331552"
//  */

// /**
//  * @swagger
//  * /user:
//  *  get:
//  *    summary: bring all users
//  *    tags: [User]
//  *    responses:
//  *      200:
//  *        description: returns all users
//  *        content:
//  *          application/json:
//  *            schema:
//  *              type: array
//  *              items:
//  *                $ref: '#/components/schemas/User'
//  */
userRouter.post("/", createUser);
userRouter.get("/", users);

userRouter.get("/:id", (req, res) => {
  res.status(200).send("obtengo user id");
});

// /**
//  * @swagger
//  * /user:
//  *  post:
//  *    summary: create a new user
//  *    tags: [User]
//  *    requestBody:
//  *      required: true
//  *      content:
//  *        application/json:
//  *          schema:
//  *            $ref: '#/components/schemas/User'
//  *    responses:
//  *      200:
//  *        description: successfully created User
//  */

module.exports = userRouter;
