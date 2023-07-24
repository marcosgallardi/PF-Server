const { Router } = require("express");
const userRouter = require("./userRouter");
const desertRouter = require("./desertRouter");
const dish_sideRouter = require("./dish_sideRouter");
const orderRouter = require("./orderRouter");
const drinkRouter = require("./drinkRouter");
const sideRouter = require("./sideRouter");
const gralRouter = require("./gralRouter");
const drinkOrderRouter = require("./drinkOrderRouter");
const desertOrderRouter = require("./desertOrderRouter");
const sideOrderRouter = require("./sideOrderRouter");
const dishOrderRouter = require("./dishOrderRouter");
const dishSideOrderRouter = require("./dishSideOrderRouter");
const completeOrderRouter = require("./completeOrderRouter");
const dishRouter = require("./dishRouter");
const restoreRouter = require("./restoreRouter")
const nameRouter = require("./nameRouter");
const mainRouter = Router();



mainRouter.use("/id", gralRouter);
mainRouter.use("/order", orderRouter);
mainRouter.use("/dish_side", dish_sideRouter);
mainRouter.use("/user", userRouter);
mainRouter.use("/side", sideRouter);
mainRouter.use("/drink", drinkRouter);
mainRouter.use("/desert", desertRouter);
mainRouter.use("/dish", dishRouter);
mainRouter.use("/restore", restoreRouter);
///modelos order....
mainRouter.use("/drinkorder", drinkOrderRouter);
mainRouter.use("/desertorder", desertOrderRouter);
mainRouter.use("/sideorder", sideOrderRouter);
mainRouter.use("/dishorder", dishOrderRouter);
mainRouter.use("/dishSideOrder", dishSideOrderRouter);
mainRouter.use("/completeOrder", completeOrderRouter);

module.exports = mainRouter;
