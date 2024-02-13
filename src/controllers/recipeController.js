const recipeModel = require("../models/recipeModel");
const authorModel = require("../models/authorModel");

// Get all recipe, by name, by category, by ingredient
const getUsers = async (req, res) => {
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
};

// Get recipe by id
const getUserById = async (req, res) => {
    try {
        let recipe = await recipeModel.findOne({ _id: req.params.id });
        res.send(recipe);
    } catch (e) {
        res.send(e);
    }
};

// Create recipe
const setRecipe = async (req, res) => {
    try {
        const author = authorModel.findOne({ _id: req.params.idAuthor });
        if (author) {
            let newRecipe = new recipeModel(req.body);
            newRecipe.validateSync(); // Check if compliant with model
            await newRecipe.save();
            await authorModel.updateOne(
                { _id: req.params.idAuthor },
                { $push: { recipe: newRecipe._id } },
            );
            res.send("recipe added succesfully");
        } else {
            res.json("aucun author trouvé");
        }
    } catch (e) {
        res.json(e);
    }
};

// Update recipe
const editRecipe = async (req, res) => {
    try {
        await recipeModel.updateOne({ _id: req.params.id }, req.body);
        res.send("recipe modified");
    } catch (e) {
        res.send(e);
    }
};

// Delete recipe by id
const deleteRecipe = async (req, res) => {
    try {
        const author = await authorModel.findOne({
            recipe: req.params.idRecipe,
        });
        if (author) {
            await authorModel.updateOne(
                { recipe: req.params.idRecipe },
                { $pull: { recipe: req.params.idRecipe } },
            );
            await recipeModel.deleteOne({ _id: req.params.idRecipe });
            res.send("recipe deleted");
        }
    } catch (e) {
        res.send(e);
    }
};

module.exports = {
    getUsers,
    getUserById,
    setRecipe,
    editRecipe,
    deleteRecipe,
};
