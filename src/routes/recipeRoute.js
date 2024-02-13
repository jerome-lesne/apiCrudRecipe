const recipeModel = require("../models/recipeModel");
const recipeRouter = require("express").Router();
const {
    getUsers,
    getUserById,
    setRecipe,
    editRecipe,
    deleteRecipe,
} = require("../controllers/recipeController");

recipeRouter.get("/recipes", getUsers);
recipeRouter.get("/recipes/:id", getUserById);
recipeRouter.post("/author/:idAuthor/recipes", setRecipe);
recipeRouter.put("/recipes/:id", editRecipe);
recipeRouter.delete("/author/:idRecipe/recipes", deleteRecipe);

module.exports = recipeRouter;
