const SongController = require('../controllers/song.controller')

module.exports = (app) => {
    // Create Song C
    app.post('/api/songs/new', SongController.createSong)
    // Read all R
    app.get('/api/songs', SongController.allSongs)
    // Read One Song R
    app.get('/api/songs/:id', SongController.oneSong)
    // Update Song U
    app.put('/api/songs/update/:id', SongController.updateSong)
    // Delete Song D
    app.delete('/api/songs/delete/:id', SongController.deleteSong)
}