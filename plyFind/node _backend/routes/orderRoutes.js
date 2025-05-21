const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

router.post('/', orderController.placeOrder);
router.get('/:userId', orderController.getOrdersByUser);
router.put('/:orderId', orderController.updateOrder);
router.delete('/:orderId', orderController.cancelOrder);

module.exports = router;
