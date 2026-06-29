const express = require("express");
const cors = require("cors");
require("dotenv").config();

const analyzeRoute = require("./routes/analyze");

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/analyze", analyzeRoute);

// Test Route
app.get("/", (req, res) => {
  res.send("🚀 AI Investment Research Agent Backend Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});