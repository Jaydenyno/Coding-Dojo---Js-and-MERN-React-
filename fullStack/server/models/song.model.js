const mongoose = require('mongoose')

const SongSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        minlength: [3, "Title must be 3 characters long or longer"]
    },
    artist: {
        type: String,
        required: [true, "Artist is required"],
        minlength: [2, "Artist must be 3 characters long or longer"]
    },
    rating: {
        type: Number,
        min: [1, "Rating needs to be at between 1 ~ 10"],
        max: [10, "Rating needs to be at between 1 ~ 10"]
    },
    top100: {
        type: Boolean
    },
    img: {
        type: String,
        required: [true, "Please add album cover URL"]
    }
}, {timestamps: true})

const Song = mongoose.model("Song", SongSchema)
module.exports = Song;
