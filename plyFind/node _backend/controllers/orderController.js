const Order = require('../models/orderSchema');
const Product = require('../models/productSchema');
const getRedisClient = require('../config/redisClient');

const redisClient = getRedisClient();

exports.placeOrder = async (req, res) => {
    const { userId, paymentType } = req.body;

    try {
        const cartKey = `cart:${userId}`;
        const cartData = await redisClient.get(cartKey);
        if (!cartData) return res.status(400).json({ message: 'Cart is empty' });

        const cart = JSON.parse(cartData);
        let totalPrice = 0;

        for (const item of cart) {
            totalPrice += item.price * item.quantity;
        }

        const order = new Order({
            userId,
            products: cart.map(({ productId, quantity, price }) => ({
                productId,
                quantity,
                price
            })),
            totalPrice,
            paymentType
        });

        await order.save();
        await redisClient.del(cartKey);

        res.status(201).json({ message: 'Order placed successfully', order });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getOrdersByUser = async (req, res) => {
    const { userId } = req.params;
    try {
        const orders = await Order.find({ userId });
        res.json(orders);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateOrder = async (req, res) => {
    const { orderId } = req.params;
    const updates = req.body;

    try {
        const order = await Order.findOneAndUpdate({ orderId }, updates, { new: true });
        if (!order) return res.status(404).json({ message: 'Order not found' });
        res.json(order);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.cancelOrder = async (req, res) => {
    const { orderId } = req.params;
    try {
        const order = await Order.findOneAndUpdate(
            { orderId },
            { orderStatus: 'cancelled' },
            { new: true }
        );
        if (!order) return res.status(404).json({ message: 'Order not found' });
        res.json({ message: 'Order cancelled', order });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
