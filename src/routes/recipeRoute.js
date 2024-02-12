const recipeModel = require("../models/recipeModel");
const recipeRouter = require("express").Router();

// Get all recipe, by name, by category, by ingredient
recipeRouter.get("/recipes", async (req, res) => {
    try {
        let recipe = null;
        if (req.query.title) {
            recipe = await recipeModel.find({ title: req.query.title });
        } else if (req.query.category) {
            recipe = await recipeModel.find({ category: req.query.category });
        } else if (req.query.ingredients) {
            recipe = await recipeModel.find({
                ingredients: req.query.ingredients,
            });
        } else {
            recipe = await recipeModel.find();
        }
        res.send(recipe);
    } catch (e) {
        res.send(e);
    }
});

// Get recipe by id
recipeRouter.get("/recipes/:id", async (req, res) => {
    try {
        let recipe = await recipeModel.findOne({ _id: req.params.id });
        res.send(recipe);
    } catch (e) {
        res.send(e);
    }
});

// Create recipe
recipeRouter.post("/recipes", async (req, res) => {
    try {
        let newRecipe = new recipeModel(req.body);
        newRecipe.validateSync(); // Check if compliant with model
        await newRecipe.save();
        res.send("recipe added succesfully");
    } catch (e) {
        res.json(e);
    }
});

// Update recipe
recipeRouter.put("/recipes/:id", async (req, res) => {
    try {
        await recipeModel.updateOne({ _id: req.params.id }, req.body);
        res.send("recipe modified");
    } catch (e) {
        res.send(e);
    }
});

// Delete recipe by id
recipeRouter.delete("/recipes/:id", async (req, res) => {
    try {
        await recipeModel.deleteOne({ _id: req.params.id });
        res.send("recipe deleted");
    } catch (e) {
        res.send(e);
    }
});

module.exports = recipeRouter;
