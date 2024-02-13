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
recipeRouter.post("/recipes", setRecipe);
recipeRouter.put("/recipes/:id", editRecipe);
recipeRouter.delete("/recipes/:id", deleteRecipe);

module.exports = recipeRouter;
