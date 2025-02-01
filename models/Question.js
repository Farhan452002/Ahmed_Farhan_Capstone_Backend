const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
    category: String,
    question: String,
    answer: String,
    points: Number,
});

module.exports = mongoose.model("Question", QuestionSchema);
