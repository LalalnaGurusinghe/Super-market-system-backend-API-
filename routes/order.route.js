const express = require('express')

const router = express.Router()

const OrderController = require('../controllers/order.controller')

router.post('/create-order',OrderController.createOrder)
router.get('/orders',OrderController.getOrder)
router.get('get-order/:id',OrderController.getOrderById)
router.delete('/delete-order',OrderController.deleteOrderById)

module.exports = router