// server.js
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const contactRoutes = require("./routes/contact");

const app = express();
const PORT = process.env.PORT || 3000;

// ===== Security & parsing middleware =====
app.use(helmet());
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "*",
    methods: ["GET", "POST"],
  })
);
app.use(express.json({ limit: "10kb" }));

// ===== Routes =====
app.get("/", (req, res) => {
  res.json({ status: "ok", message: "Rhaashee L Portfolio API is running" });
});

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", uptime: process.uptime() });
});

app.use("/api/contact", contactRoutes);

// ===== 404 handler =====
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

// ===== Global error handler =====
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: "Internal server error" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
