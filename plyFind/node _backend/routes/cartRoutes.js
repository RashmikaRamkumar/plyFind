const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

// Support both route patterns
router.get('/getCart/:userId', cartController.getCart); // New route
router.get('/:userId', cartController.getCart); // Existing route

// Route for adding a product to the cart
router.post('/', cartController.addToCart);

// Route for updating the quantity or dimensions of a product in the cart
router.put('/', cartController.updateCart);

// Route for removing a product from the cart
router.delete('/', cartController.removeFromCart);

// Route for clearing the entire cart
router.delete('/:userId/clear', cartController.clearCart);

module.exports = router;
