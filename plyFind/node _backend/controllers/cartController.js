const Product = require('../models/productSchema');
const getRedisClient = require('../config/redisClient');

const redisClient = getRedisClient();

// Fix the calculatePrice function to properly use the passed dimensions
const calculatePrice = (basePrice, costPerUnitVolume, dimensions) => {
    const { height, width, depth } = dimensions;
    const volume = height * width * depth;
    return basePrice + (volume * costPerUnitVolume);
};

// Function to get the user's cart from Redis
exports.getCart = async (req, res) => {
    const { userId } = req.params;  // Extract userId from the route parameter

    try {
        const cartKey = `cart:${userId}`;  // The cart is stored with a key like 'cart:{userId}'
        const cartData = await redisClient.get(cartKey);  // Get the cart data from Redis

        if (!cartData) {
            return res.status(404).json({ message: 'Cart not found for this user' });
        }

        // Parse the cart data from JSON and send it in the response
        const cart = JSON.parse(cartData);
        res.json({ cart });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.addToCart = async (req, res) => {
    const { userId, productId, quantity, customDimensions } = req.body;

    try {
        const product = await Product.findOne({ productId });
        if (!product) return res.status(404).json({ message: 'Product not found' });

        const cartKey = `cart:${userId}`;
        const cartData = await redisClient.get(cartKey);
        let cart = cartData ? JSON.parse(cartData) : [];

        const existingIndex = cart.findIndex(item => item.productId === productId);

        // Fix the price calculation by properly passing customDimensions
        const price = calculatePrice(
            product.basePrice || 0, // Add a default basePrice if not present
            product.costPerUnitVolume,
            customDimensions
        );

        if (existingIndex > -1) {
            cart[existingIndex].quantity += quantity;
            cart[existingIndex].customDimensions = customDimensions;
            cart[existingIndex].price = price;
        } else {
            cart.push({ productId, quantity, customDimensions, price });
        }

        await redisClient.set(cartKey, JSON.stringify(cart));
        res.json({ message: 'Item added/updated in cart', cart });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateCart = async (req, res) => {
    const { userId, productId, quantity, customDimensions } = req.body;

    try {
        const cartKey = `cart:${userId}`;
        const cartData = await redisClient.get(cartKey);
        let cart = cartData ? JSON.parse(cartData) : [];

        const index = cart.findIndex(item => item.productId === productId);
        if (index === -1) return res.status(404).json({ message: 'Item not in cart' });

        const product = await Product.findOne({ productId });
        if (!product) return res.status(404).json({ message: 'Product not found' });

        // Calculate price based on custom dimensions and costPerUnitVolume from product schema
        const price = calculatePrice(product.costPerUnitVolume, customDimensions);  // Use costPerUnitVolume instead of price

        cart[index].quantity = quantity;
        cart[index].customDimensions = customDimensions;
        cart[index].price = price;

        await redisClient.set(cartKey, JSON.stringify(cart));
        res.json({ message: 'Cart updated', cart });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.removeFromCart = async (req, res) => {
    const { userId, productId } = req.body;

    try {
        const cartKey = `cart:${userId}`;
        const cartData = await redisClient.get(cartKey);
        let cart = cartData ? JSON.parse(cartData) : [];

        cart = cart.filter(item => item.productId !== productId);
        await redisClient.set(cartKey, JSON.stringify(cart));
        res.json({ message: 'Item removed from cart', cart });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.clearCart = async (req, res) => {
    const { userId } = req.params;
    try {
        await redisClient.del(`cart:${userId}`);
        res.json({ message: 'Cart cleared' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
