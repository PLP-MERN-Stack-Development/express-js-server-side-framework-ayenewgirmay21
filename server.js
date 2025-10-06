// server.js
// Week 2: Express.js – Middleware Implementation

const express = require("express");
const app = express();
const logger = require("./middleware/logger");
const auth = require("./middleware/auth");
const productRoutes = require("./routes/products");

// Middleware to parse JSON request bodies
app.use(express.json());

// Custom logger middleware
app.use(logger);

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to the Product API 🧩 — Middleware Enabled!");
});

// Use product routes (protected by authentication middleware)
app.use("/api/products", auth, productRoutes);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
