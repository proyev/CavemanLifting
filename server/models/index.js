const mongoose = require("mongoose");

// Use environment variable for MongoDB URI, with fallback for local development
const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/caveman_db";

console.log("Connecting to MongoDB at:", MONGODB_URI);

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

// FIX: Added (error) parameter that was missing
db.on("error", (error) => console.log("MongoDB connection error:", error));
db.on("open", () => console.log("We have been enlightened"));

module.exports = db;
