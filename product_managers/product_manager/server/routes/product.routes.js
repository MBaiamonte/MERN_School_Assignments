const ProductController = require('../controllers/product.controller');

module.exports = app =>{
    app.get('/api/products', ProductController.findAllProducts);
    app.get('/api/products/:id', ProductController.getOneProduct);
    app.post('/api/products', ProductController.createNewProduct);
    app.delete('/api/product/:id', ProductController.deleteProduct);
    app.patch('/api/product/:id', ProductController.updateProduct);
    



}//end routes