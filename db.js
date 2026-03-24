// db.js
const mongoose = require("mongoose");

async function connectDB() {
  const uri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/portfolio";
  await mongoose.connect(uri);
  console.log("Connected to MongoDB:", mongoose.connection.name);
}

module.exports = connectDB;
