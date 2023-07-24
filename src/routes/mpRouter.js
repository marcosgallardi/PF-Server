const { Router } = require("express");
const  mpHandler  = require("../Handlers/mpHandler");
const mpRouter = Router()
 
mpRouter.post('/',mpHandler)

module.exports = mpRouter;