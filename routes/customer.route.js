const express = require('express');
const router = express.Router();

const productController = require('../controllers/customer.controller')


router.get('/customers', productController.getAllCustomers);
router.post('/add-customer', productController.addCustomer);
router.get('/customer/:id', productController.getCustomerById);
router.put('/customer-update/:id', productController.updateCustomerById);
router.delete('/customer-delete/:id', productController.deleteById);

module.exports = router;