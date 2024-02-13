const authorRouter = require("express").Router();
const {
    getAuthors,
    setAuthor,
    getAuthorRecipe,
} = require("../controllers/authorController");

authorRouter.get("/author", getAuthors);
authorRouter.post("/author", setAuthor);
authorRouter.get("/author/:id", getAuthorRecipe);

module.exports = authorRouter;
