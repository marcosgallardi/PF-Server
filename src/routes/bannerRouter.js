const { Router } = require("express");
const banner = require("../Handlers/banner");
const createBanner = require("../Handlers/createBanner");
const updateBanner = require("../Handlers/updateBanner");

const bannerRouter = Router();

bannerRouter.get("/", banner);
bannerRouter.post("/", createBanner);
bannerRouter.put("/:id", updateBanner);

module.exports = bannerRouter;
