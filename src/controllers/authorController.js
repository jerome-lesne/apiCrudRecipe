const authorModel = require("../models/authorModel");

const getAuthors = async (req, res) => {
    try {
        const author = await authorModel.find();
        res.json(author);
    } catch (e) {
        res.json(e);
    }
};

const setAuthor = async (req, res) => {
    try {
        const author = new authorModel(req.body);
        author.validateSync();
        await author.save();
        res.json("author saved");
    } catch (e) {
        res.json(e);
    }
};

const getAuthorRecipe = async (req, res) => {
    try {
        const author = await authorModel
            .findOne({ _id: req.params.id })
            .populate("recipe");
        res.json(author);
    } catch (e) {
        res.json(e);
    }
};

module.exports = {
    getAuthors,
    setAuthor,
    getAuthorRecipe,
};
