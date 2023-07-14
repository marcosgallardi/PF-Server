const { Router } = require("express");

const userRouter = Router();

userRouter.get("/", (req, res) => {
  res.status(200).send("obtengo users");
});

userRouter.get("/:id", (req, res) => {
  res.status(200).send("obtengo user id");
});
userRouter.post("/", (req, res) => {
  res.status(200).send("creo usuario");
});

module.exports = userRouter;
