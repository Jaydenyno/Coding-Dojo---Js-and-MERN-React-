const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        minlength: [3, "Must be longer than 3 characters"]
    },
    price: {
        type: Number,
        required: [true, "Everything got a price!"],
        min: [1, "Everything got a price!"],
        max: [10000, "No more than 10,000!"]
    },
    description: {
        type: String,
        required: [true, "Add some description!"],
        minlength: [1, "Description is too short!"]
    }
}, {timestamps: true})

const Product = mongoose.model("Product", ProductSchema)
module.exports = Product