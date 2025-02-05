require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const questionRoutes = require("./routes/questionRoutes");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Database connection
connectDB();

// Routes
app.use("/questions", questionRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
