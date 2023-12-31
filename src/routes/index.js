const { Router } = require("express");
const userRouter = require("./userRouter");
const localRouter = require("./localRouter");
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
const nameRouter = require("./nameRouter");
const mainRouter = Router();
const dishRouter = require("./dishRouter");
const mpRouter = require("./mpRouter");
const bannerRouter = require("./bannerRouter");
const ticketRouter = require("./ticketRouter");
const commentRouter = require("./commentRouter");
const authenticateToken = require("../authMiddleware");
const createJWTRouter = require("./JsonWebToken/createJWTRouter");
const cartRouter = require("./cartRouter");
const reservationRouter = require("./reservationRouter");

mainRouter.use("/mercadopago", mpRouter);
mainRouter.use("/search", nameRouter);
mainRouter.use("/id", gralRouter);
mainRouter.use("/order", orderRouter);
mainRouter.use("/dish_side", dish_sideRouter);
mainRouter.use("/user", userRouter);
mainRouter.use("/side", sideRouter);
mainRouter.use("/drink", drinkRouter);
mainRouter.use("/desert", desertRouter);
mainRouter.use("/dish", dishRouter);
///modelos order....
mainRouter.use("/drinkorder", drinkOrderRouter);
mainRouter.use("/desertorder", desertOrderRouter);
mainRouter.use("/sideorder", sideOrderRouter);
mainRouter.use("/dishorder", dishOrderRouter);
mainRouter.use("/dishSideOrder", dishSideOrderRouter);

// Banner route
mainRouter.use("/banner", bannerRouter);
mainRouter.use("/ticket", ticketRouter);
mainRouter.use("/reser", reservationRouter)
mainRouter.use("/local", localRouter);
mainRouter.use("/create-jwt", createJWTRouter);

mainRouter.use("/cart", authenticateToken, cartRouter);
mainRouter.use("/completeOrder", authenticateToken, completeOrderRouter);

mainRouter.use("/comment", commentRouter);

module.exports = mainRouter;
