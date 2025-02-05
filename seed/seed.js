require("dotenv").config();
const mongoose = require("mongoose");
const Question = require("../models/Question");
const connectDB = require("../config/db");

const seedQuestions = [
    { category: "History", question: "Who was the first president of the USA?", answer: "George Washington", points: 100 },
    { category: "Science", question: "What planet is known as the Red Planet?", answer: "Mars", points: 200 },
    { category: "Geography", question: "What is the capital of France?", answer: "Paris", points: 300 },
    { category: "Sports", question: "How many players are on a soccer team?", answer: "11", points: 400 },
    { category: "Movies", question: "Who directed 'Titanic'?", answer: "James Cameron", points: 500 }
];

const seedDB = async () => {
    try {
        await connectDB();
        await Question.deleteMany();
        await Question.insertMany(seedQuestions);
        console.log("Database seeded successfully");
        process.exit();
    } catch (error) {
        console.error("Seeding error:", error);
        process.exit(1);
    }
};

seedDB();
