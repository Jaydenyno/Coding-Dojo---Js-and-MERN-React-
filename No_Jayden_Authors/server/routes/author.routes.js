const AuthorController = require('../controllers/author.controller')

module.exports = (app) => {
        // Create
        app.post('/api/authors/new', AuthorController.createAuthor)
        // Read All
        app.get('/api/authors', AuthorController.allAuthors)
        // Read One
        app.get('/api/authors/:id', AuthorController.oneAuthor)
        // Update One
        app.put('/api/authors/update/:id', AuthorController.updateAuthor)
        // Delete One
        app.delete('/api/authors/delete/:id', AuthorController.deleteAuthor)
}