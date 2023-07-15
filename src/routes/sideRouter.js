const { Router } = require("express");

const sideRouter = Router();
const sides = require("../Handlers/sides");
const createSide = require("../Handlers/createSide");
sideRouter.get("/", sides);

sideRouter.get("/:id", (req, res) => {
  res.status(200).send("obtengo el side de id ");
});

sideRouter.post("/", createSide);

module.exports = sideRouter;
