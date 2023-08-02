const { Router } = require("express");
const mpHandler = require("../Handlers/mpHandler");
const webHookMP = require("../Handlers/createCompleteOrder");
const mpRouter = Router();

mpRouter.post("/", mpHandler);

mpRouter.post("/notification", webHookMP);

module.exports = mpRouter;
