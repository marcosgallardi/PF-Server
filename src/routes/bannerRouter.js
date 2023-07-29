const { Router } = require("express");
const banner = require("../Handlers/banner");
const createBanner = require("../Handlers/createBanner");
const updateBanner = require("../Handlers/updateBanner");
const deleteBanner = require("../Handlers/deleteBanner");

const bannerRouter = Router();

bannerRouter.get("/", banner);
bannerRouter.post("/", createBanner);
bannerRouter.put("/:id", updateBanner);
bannerRouter.delete("/:id", deleteBanner);

module.exports = bannerRouter;
