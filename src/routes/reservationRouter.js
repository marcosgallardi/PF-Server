const {
  handlersPostReser,
  handlerGetAllReser,
  handlerGetReser,
  handlerUpReser,
  handlerReserByUserId,
  handlerDeleteReser,
} = require("../Handlers/handlersReservation");
const { Router } = require("express");
const reservationRouter = Router();

reservationRouter.post("/", handlersPostReser);
reservationRouter.get("/", handlerGetAllReser);
reservationRouter.get("/:date", handlerGetReser);
reservationRouter.put("/:id", handlerUpReser);
reservationRouter.get("/user/:id", handlerReserByUserId);
reservationRouter.delete("/:id", handlerDeleteReser);

module.exports = reservationRouter;
