const { Router } = require("express");
const { handlerGetLocal, handlerGetLocalById, handlerUpLocal, handlerPostLocal, handlerDeleLocal } = require("../Handlers/handlersLocal");


const localRouter = Router();


localRouter.get("/", handlerGetLocal);
localRouter.get("/:id", handlerGetLocalById);
localRouter.put("/:id", handlerUpLocal);
localRouter.post("/", handlerPostLocal);
localRouter.delete("/:id", handlerDeleLocal);



module.exports = localRouter;