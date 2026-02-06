const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const taskRoutes = require("./routes/taskRoutes");

require("dotenv").config();

const app = express();

// Enable CORS
app.use(cors());

// Handle preflight requests
app.options("*", cors());

// Parse JSON bodies
app.use(express.json());

// Connect to MongoDB
connectDB();

// Health check
app.get("/health", (req, res) => {
  res.send("OK");
});

// Task API routes
app.use("/api/tasks", taskRoutes);

// Root route
app.get("/", (req, res) => {
  res.send("API running");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
