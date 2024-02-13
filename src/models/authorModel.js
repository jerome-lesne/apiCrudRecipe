const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "le nom est requis"],
    },
    recipe: {
        type: [
            {
                type: mongoose.Schema.ObjectId,
                ref: "recipe",
            },
        ],
    },
});

const authorModel = mongoose.model("author", authorSchema);
module.exports = authorModel;
