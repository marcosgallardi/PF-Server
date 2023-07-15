const { Router } = require("express");

const userRouter = Router();
const users = require("../Handlers/users");
const createUser = require("../Handlers/createUser");
userRouter.get("/", users);

userRouter.get("/:id", (req, res) => {
  res.status(200).send("obtengo user id");
});
userRouter.post("/", createUser);

module.exports = userRouter;
