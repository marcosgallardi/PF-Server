const { Router } = require("express");
const desert = require("../Handlers/desert");
const desertRouter = Router();
const createDesert = require("../Handlers/createDesert");

desertRouter.get("/", desert);

desertRouter.get("/:id", (req, res) => {
  res.status(200).send("obtengo el desert de id ");
});

desertRouter.post("/", createDesert);

module.exports = desertRouter;
