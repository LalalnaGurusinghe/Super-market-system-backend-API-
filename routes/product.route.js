const express = require('express');
const router = express.Router();

const productController = require('../controllers/product.controller')


router.get('/products', productController.getAllProducts);
router.post('/add-product', productController.addProduct);
router.get('/product/:id', productController.getProductById);
router.put('/product-update/:id', productController.updateProductById);
router.delete('/product-delete/:id', productController.deleteById);

module.exports = router;