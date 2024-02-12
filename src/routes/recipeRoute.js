const recipeModel = require("../models/recipeModel");
const recipeRouter = require("express").Router();

recipeRouter.get("/recipe", async (req, res) => {
    try {
        let recipe = await recipeModel.find();
        res.send(recipe);
    } catch (e) {
        res.send(e);
    }
});

recipeRouter.post("/recipe", async (req, res) => {
    try {
        let newRecipe = new recipeModel(req.body);
        newRecipe.validateSync(); // Check if compliant with model
        await newRecipe.save();
        res.send("recipe added succesfully");
    } catch (e) {
        console.log(e);
        res.json(e);
    }
});

recipeRouter.put("/recipe/:id", async (req, res) => {
    try {
        await recipeModel.updateOne({ _id: req.params.id }, req.body);
        res.send("recipe modified");
    } catch (e) {
        res.send(e);
    }
});

recipeRouter.delete("/recipe/:id", async (req, res) => {
    try {
        await recipeModel.deleteOne({ _id: req.params.id });
        res.send("recipe deleted");
    } catch (e) {
        res.send(e);
    }
});

module.exports = recipeRouter;
