const getRedisClient = require('../config/redisClient'); // Import the singleton function

// Add item to cart
const addToCart = async (req, res) => {
    const { userId, productId, quantity, price } = req.body;

    if (!userId || !productId || !quantity || !price) {
        return res.status(400).json({ error: 'Missing cart item fields' });
    }

    const key = `cart:${userId}`;
    const item = { productId, quantity, price };

    try {
        const redisClient = getRedisClient();  // Get the single Redis client instance
        await redisClient.rpush(key, JSON.stringify(item)); // Add to Redis cart list
        res.status(200).json({ message: 'Item added to cart' });
    } catch (error) {
        console.error('Error adding to cart:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Get all items in cart
const getCart = async (req, res) => {
    const { userId } = req.params;
    const key = `cart:${userId}`;

    try {
        const redisClient = getRedisClient();  // Get the single Redis client instance
        const items = await redisClient.lrange(key, 0, -1);
        const cart = items.map(item => JSON.parse(item)); // Parse JSON strings to objects
        res.status(200).json(cart);
    } catch (error) {
        console.error('Error fetching cart:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Remove cart (on logout or order)
const clearCart = async (req, res) => {
    const { userId } = req.params;
    const key = `cart:${userId}`;

    try {
        const redisClient = getRedisClient();  // Get the single Redis client instance
        await redisClient.del(key); // Remove the cart from Redis
        res.status(200).json({ message: 'Cart cleared' });
    } catch (error) {
        console.error('Error clearing cart:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    addToCart,
    getCart,
    clearCart
};
