const Product = require('../models/product.model')

// Create
module.exports.createProduct = (req, res) => {
    const newProduct = req.body
    Product.create(newProduct)
    .then(product => res.json({results:  product}))
    .catch(err => res.status(400).json(err))
}

// Read All
module.exports.allProducts = (req, res) => {
    Product.find()
    .then((allProducts) => res.json({results: allProducts}))
    .catch((err) => res.json(err))
}

// Read One
module.exports.oneProduct = (req, res) => {
    const idFromParams = req.params.id
    Product.findOne({_id: idFromParams})
    .then((oneProduct) => res.json({results: oneProduct}))
    .catch((err) => res.json(err))
}

// Update One
module.exports.updateProduct = (req, res) => {
    const idFromParams = req.params.id
    const updateProduct = req.body
    Product.findOneAndUpdate({_id: idFromParams}, updateProduct, {new: true})
    .then((updatedProduct) =>  res.json({results: updatedProduct}))
    .catch((err) => res.json(err))
}

// Delete One
module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({_id: req.params.id})
    .then((deletedProduct) => res.json({results: deletedProduct}))
    .catch((err) => res.json(err))
}