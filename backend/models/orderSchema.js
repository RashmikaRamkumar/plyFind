const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    orderId: {
        type: String,
        unique: true
    },
    userId: {
        type: String,
        ref: 'User',
        required: true
    },
    products: [{
        productId: {
            type: String,
            ref: 'Product',
            required: true
        },
        quantity: {
            type: Number,
            required: true,
            min: 1
        },
        price: {
            type: Number,
            required: true
        }
    }],
    totalPrice: {
        type: Number,
        required: true
    },
    orderStatus: {
        type: String,
        enum: ['pending', 'processing', 'shipped', 'delivered', 'cancelled'],
        default: 'pending'
    },
    paymentStatus: {
        type: String,
        enum: ['pending', 'completed', 'failed'],
        default: 'pending'
    },
    paymentType: {
        type: String,
        enum: ['COD', 'UPI'],
        required: true
    },      
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Pre-save middleware to generate orderId like "ORD001", "ORD002", etc.
orderSchema.pre('save', async function(next) {
    if (!this.orderId) {
        const counter = await mongoose.model('Counter').findOneAndUpdate(
            { name: 'orderId' },
            { $inc: { seq: 1 } },
            { new: true, upsert: true }
        );
        this.orderId = `ORD${counter.seq.toString().padStart(3, '0')}`;
    }
    next();
});

module.exports = mongoose.model('Order', orderSchema);