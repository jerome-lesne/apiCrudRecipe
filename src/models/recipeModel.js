const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "title required"],
    },
    ingredients: {
        type: Array,
        required: [true, "ingredients required"],
    },
    instructions: {
        type: String,
        required: [true, "instructions required"],
    },
    timePrepare: {
        type: Number,
        required: [true, "prepare time required"],
    },
    timeCooking: {
        type: Number,
        required: [false],
    },
    level: {
        type: String,
        required: [true, "level required"],
    },
    category: {
        type: String,
        required: [true, "category required"],
    },
});

const recipeModel = mongoose.model("recipe", recipeSchema);

module.exports = recipeModel;
