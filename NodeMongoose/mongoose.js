const mongoose = require('mongoose');
// Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment.
// Mongoose gives Validation, Schema, Model and query functionality

// Connect to MongoDB
async function dbConnect() {
    try {
        await mongoose.connect("mongodb://localhost:27017/e-com");
        console.log("Database connected successfully!");
    } catch (error) {
        console.error("Database connection failed:", error);
    }
}

// Schema - Allows only accepted no. of fields to have validation
const ProductSchema = new mongoose.Schema({
    name: String,
    brand: String,
    price: Number,
    category: String,
});

// Export connection function and model
const ProductModel = mongoose.model("products", ProductSchema);
module.exports = { dbConnect, ProductModel };
