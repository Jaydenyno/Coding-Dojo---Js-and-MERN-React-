const Song = require('../models/song.model')

// Create Function
module.exports.createSong = (req, res) => {
    const newSong = req.body
    Song.create(newSong)
    .then(song => res.json({results: song}))
    .catch(err => res.status(400).json(err))
}

// Read All
module.exports.allSongs = (req, res) => {
    Song.find()
    .then((allSongs) => req.json({results: allSongs}))
    .catch((err) => res.json(err))
}

// Read One
module.exports.oneSong = (req, res) => {
    const idFromParams = req.params.idFromParams
    Song.findOne({_id: idFromParams})
    .then((oneSong) => res.json({results: oneSong}))
    .catch((err) => res.json(err))
}

// Update One Song
module.exports.updateSong = (req, res) => {
    const idFromParams = req.params.id;
    const updateSong = req.body;
    Song.findOneAndUpdate({_id: idFromParams}, updateSong, {new: true})
    .then((updateSong) => res.json({results: updateSong}))
    .catch((err) => res.json(err))
}

// Delete a Song
module.exports.deleteSong = (req, res) => {
    Song.deleteOne({_id: idFromParams})
    .then((deletedSong) => res.json({results: deletedSong}))
    .catch((err) => res.json(err))
}