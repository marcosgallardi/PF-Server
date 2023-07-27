const { Router } = require("express");
const  mpHandler  = require("../Handlers/mpHandler");
const webHookMP = require("../Notification/webHookMP")
const mpRouter = Router()
 
mpRouter.post('/',mpHandler)

mpRouter.post('/notification',webHookMP)

module.exports = mpRouter;