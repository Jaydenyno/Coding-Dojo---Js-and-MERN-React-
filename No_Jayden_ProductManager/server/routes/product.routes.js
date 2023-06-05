const ProductController = require('../controllers/product.controller')

module.exports = (app) => {
    // Create
    app.post('/api/products/new', ProductController.createProduct)
    // Read All
    app.get('/api/products', ProductController.allProducts)
    // Read One
    app.get('/api/products/:id', ProductController.oneProduct)
    // Update One
    app.put('/api/products/update/:id', ProductController.updateProduct)
    // Delete One
    app.delete('/api/products/delete/:id', ProductController.deleteProduct)
}