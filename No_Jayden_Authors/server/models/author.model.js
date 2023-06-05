const mongoose = require('mongoose')

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [2, "Must be longer than 2 characters"]
    }
}, {timestamps: true})

const Author = mongoose.model("Author", AuthorSchema)
module.exports = Author