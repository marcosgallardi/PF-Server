const { Router } = require("express");

const sideRouter = Router();

sideRouter.get("/", (req, res) => {
  res.status(200).send("obtengo side");
});

sideRouter.get("/:id", (req, res) => {
  res.status(200).send("obtengo el side de id ");
});

sideRouter.post("/:id", (req, res) => {
  res.status(200).send("creo side");
});

module.exports = sideRouter;
