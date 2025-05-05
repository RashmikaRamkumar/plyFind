const express = require('express');
const { placeOrder, viewOrders, cancelOrder } = require('../controllers/orderController');
const router = express.Router();

router.post('/place', placeOrder);
router.get('/:userId', viewOrders);
router.put('/cancel/:orderId', cancelOrder);

module.exports = router;
