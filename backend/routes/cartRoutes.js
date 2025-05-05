const express = require('express');
const { addToCart, getCart, clearCart } = require('../controllers/cartController');
const router = express.Router();

router.post('/add', addToCart);
router.get('/:userId', getCart);
router.delete('/:userId', clearCart);

module.exports = router;
