const express = require("express");
const recipeRouter = require("./src/routes/recipeRoute");
const mongoose = require("mongoose");

const app = express();
const port = 3000;
const db = "mongodb://localhost:27017/apicrudrecipe"; // apibook will create a new db called api book

app.use(express.json());
app.use(recipeRouter);

app.listen(port, (err) => {
    if (!err) {
        console.log(`server listening on port : ${port}`);
    } else {
        console.log(err);
    }
});

mongoose.set("strictQuery", true);

mongoose.connect(db);
