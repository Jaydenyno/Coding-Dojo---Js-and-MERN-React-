const JokeController = require('../controllers/jokes.controller')

module.exports = (app) => {
    // Create 
    app.post('/api/jokes/new', JokeController.createJoke)
    // Read All
    app.get('/api/jokes', JokeController.allJokes)
    // Read One
    app.get('/api/jokes/:id', JokeController.oneJoke)
    // Update One
    app.get('/api/jokes/update/:id', JokeController.updateJoke)
    // Delete One
    app.get('/api/jokes/delete/:id', JokeController.deleteJoke)
}