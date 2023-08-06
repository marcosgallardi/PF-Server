const {handlersPostReser, handlerGetAllReser, handlerGetReser, handlerUpReser} = require("../Handlers/handlersReservation");
const {Router} = require("express");
const reservationRouter = Router()

reservationRouter.post("/", handlersPostReser);
reservationRouter.get("/", handlerGetAllReser);
reservationRouter.get("/:eventDate", handlerGetReser);
reservationRouter.put("/:id", handlerUpReser);


module.exports = reservationRouter;