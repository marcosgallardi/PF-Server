const {handlersPostReser, handlerGetAllReser, handlerGetReser} = require("../Handlers/handlersReservation");
const {Router} = require("express");
const reservationRouter = Router()

reservationRouter.post("/", handlersPostReser);
reservationRouter.get("/", handlerGetAllReser);
reservationRouter.get("/:eventDate", handlerGetReser);


module.exports = reservationRouter;