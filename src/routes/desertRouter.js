const { Router } = require("express");

const desertRouter = Router();

desertRouter.get("/", (req, res) => {
  res.status(200).send("obtengo desert");
});

desertRouter.get("/:id", (req, res) => {
  res.status(200).send("obtengo el desert de id ");
});

desertRouter.post("/:id", (req, res) => {
  res.status(200).send("creo desert");
});

module.exports = desertRouter;
