const mainRouter = require("express").Router();

const welcomeRouter = require("./welcome");
const authRouter = require("./auth.route");
const recipesRouter = require("./recipes");
const searchRouter = require("./search");
const likesRouter = require("./likes");
const commentRouter = require("./comments");

mainRouter.use("/", welcomeRouter);
mainRouter.use("/auth", authRouter);
mainRouter.use("/recipe", recipesRouter);
mainRouter.use("/search", searchRouter);
mainRouter.use("/likes", likesRouter);

mainRouter.use("/comments", commentRouter);

module.exports = mainRouter;
