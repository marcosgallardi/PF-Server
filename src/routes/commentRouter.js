const { Router } = require("express");
const addCommentDish = require("../Handlers/CommentsHandler/addCommentDish");

const commentRouter = Router();


commentRouter.post("/", addCommentDish);




module.exports = commentRouter;