const express = require('express');
const router = express.Router();
const {
    getAllProducts,
    addProduct,
    updateProduct,
    deleteProduct
} = require('../controllers/productController');

// Public: Get all products or filter by category
router.get('/', getAllProducts);

// Admin routes
router.post('/', addProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;
