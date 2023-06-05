const Joke = require('../models/jokes.model')

// Create Function
module.exports.createJoke = (req, res) => {
    const newJoke = req.body
    Joke.create(newJoke)
    .then(joke => res.json({ results: joke }))
    .catch(err => res.json(err))
}

// Read All
module.exports.allJokes = (req, res) => {
    Joke.find()
    .then((allJokes) => req.json( {results: allJokes}))
    .catch((err) => res.json(err))
}

// Read One
module.exports.oneJoke = (req, res) => {
    const idFromParams = req.params.idFromParams
    Joke.findOne({ _id: idFromParams})
    .then((oneJoke) => res.json( {results: oneJoke }))
    .catch((err) => res.json(err))
}

// Update One Joke
module.exports.updateJoke = (req, res) => {
    const idFromParams = req.params.idFromParams
    const updateSong = req.body
    Joke.findOneAndUpdate( { _id: idFromParams }, updateSong, {new: true})
    .then((updateSong) => res.json({ results: updateSong} ))
    .catch((err) => res.json(err))
}

// Delete One Joke
module.exports.deleteJoke = (req, res) => {
    const idFromParams = req.params.idFromParams
    Joke.deleteOne({ _id: idFromParams })
    .then((deletedJoke) => res.json( {results: deletedJoke}))
    .catch((err) => res.json(err))
}