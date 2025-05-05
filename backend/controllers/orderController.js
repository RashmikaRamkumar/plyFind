const Redis = require('ioredis');
const Order = require('../models/orderSchema');

let redisClient;

const getRedisClient = () => {
    if (!redisClient) {
        redisClient = new Redis({
            host: 'localhost',
            port: 6379,
            password: '',
        });

        redisClient.on('connect', () => {
            console.log('Connected to Redis');
        });

        redisClient.on('error', (err) => {
            console.error('Redis connection error:', err);
        });
    }
    return redisClient;
};

// Place a new order
const placeOrder = async (req, res) => {
    try {
        const order = new Order(req.body);
        await order.save();
        res.status(201).json(order);
    } catch (error) {
        res.status(400).json({ error: 'Failed to place order', details: error.message });
    }
};

// View orders for a user
const viewOrders = async (req, res) => {
    try {
        const orders = await Order.find({ userId: req.params.userId });
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch orders', details: error.message });
    }
};

// Cancel an order
const cancelOrder = async (req, res) => {
    try {
        const order = await Order.findOneAndUpdate(
            { orderId: req.params.orderId },
            { orderStatus: 'cancelled' },
            { new: true }
        );
        if (!order) return res.status(404).json({ error: 'Order not found' });
        res.status(200).json(order);
    } catch (error) {
        res.status(400).json({ error: 'Failed to cancel order', details: error.message });
    }
};

module.exports = {
    getRedisClient,
    placeOrder,
    viewOrders,
    cancelOrder
};
