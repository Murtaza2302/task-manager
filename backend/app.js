const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

require("dotenv").config();

const app = express();

// Middleware
app.use(cors({
  origin: [
    "http://localhost:3000",
    "http://localhost:5500",
    "http://127.0.0.1:5500",
    "https://task-manager18.netlify.app"
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
app.use(express.json());

app.options("*", cors());

// Connect DB
connectDB();

// Test route
app.get("/", (req, res) => {
  res.send("API running");
});

app.get("/health", (req, res) => {
  res.send("OK");
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const taskRoutes = require("./routes/taskRoutes");

app.use("/api/tasks", taskRoutes);
