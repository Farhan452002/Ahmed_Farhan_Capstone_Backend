const express = require("express");
const router = express.Router();
const Question = require("../models/Question");

// @desc Get all questions
router.get("/", async (req, res) => {
    try {
        const questions = await Question.find();
        res.json(questions);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// @desc Add a new question
router.post("/", async (req, res) => {
    const { category, question, answer, points } = req.body;
    try {
        const newQuestion = new Question({ category, question, answer, points });
        await newQuestion.save();
        res.status(201).json(newQuestion);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// @desc Delete a question
router.delete("/:id", async (req, res) => {
    try {
        await Question.findByIdAndDelete(req.params.id);
        res.json({ message: "Question deleted" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
