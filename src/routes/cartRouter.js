const { Router } = require("express");
const cartById = require("../Handlers/CartHandler/cartById");
const addToCart = require("../Handlers/CartHandler/addToCart");
const updateCart = require("../Handlers/CartHandler/updateCart");
const deleteCartById = require("../Handlers/CartHandler/deleteCartById");


const cartRouter = Router();


cartRouter.post("/", addToCart);

cartRouter.get("/", cartById);

cartRouter.put("/", updateCart);

cartRouter.delete('/', deleteCartById);



module.exports = cartRouter;
