const Author = require('../models/author.model')

// Create
module.exports.createAuthor = (req, res) => {
    const newAuthor = req.body
    Author.create(newAuthor)
    .then(author => res.json({results: author}))
    .catch(err => res.status(400).json(err))
}

// Read All
module.exports.allAuthors = (req, res) => {
    Author.find()
    .then((allAuthors) => res.json({results: allAuthors}))
    .catch((err) => res.json(err))
}

// Read One
module.exports.oneAuthor = (req, res) => {
    const idFromParams = req.params.id
    Author.findOne({_id: idFromParams})
    .then((oneAuthor) => res.json({results: oneAuthor}))
    .catch((err) => res.json(err))
}

// Update One
module.exports.updateAuthor = (req, res) => {
    const idFromParams = req.params.id
    const updateAuthor = req.body
    Author.findOneAndUpdate({_id: idFromParams}, updateAuthor, {runValidators: true, new: true})
    .then((updatedAuthor) =>  res.json({results: updatedAuthor}))
    .catch((err) => res.status(400).json(err))
}

// Delete One
module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({_id: req.params.id})
    .then((deletedAuthor) => res.json({results: deletedAuthor}))
    .catch((err) => res.json(err))
}