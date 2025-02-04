require("dotenv").config();
const mongoose = require("mongoose");
const Question = require("./models/Question");

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.error("MongoDB connection error:", err));

// Default questions
const seedQuestions = [
    {
        category: "Science",
        question: "What planet is known as the Red Planet?",
        answer: "Mars",
        points: 100
    },
    {
        category: "History",
        question: "Who was the first president of the United States?",
        answer: "George Washington",
        points: 200
    },
    {
        category: "Math",
        question: "What is the square root of 64?",
        answer: "8",
        points: 300
    },
    {
        category: "Geography",
        question: "What is the capital of France?",
        answer: "Paris",
        points: 400
    },
    {
        category: "Technology",
        question: "What does CPU stand for?",
        answer: "Central Processing Unit",
        points: 500
    }
];

// Insert default questions
const seedDB = async () => {
    try {
        await Question.deleteMany(); // Clears the collection before adding new data
        await Question.insertMany(seedQuestions);
        console.log("Seed data inserted!");
        mongoose.connection.close(); // Close connection after seeding
    } catch (err) {
        console.error("Seeding error:", err);
    }
};

seedDB();
