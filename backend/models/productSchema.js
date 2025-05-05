const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productId: {
        type: String,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    images: [{
        url: {
            type: String,
            required: true
        },
        cloudinaryId: {
            type: String,
            required: true
        }
    }],
    height: {
        type: Number,
        required: true
    },
    width: {
        type: Number,
        required: true
    },
    depth: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

// Pre-save middleware to generate productId like "PRD001", "PRD002", etc.
productSchema.pre('save', async function(next) {
    if (!this.productId) {
        const counter = await mongoose.model('Counter').findOneAndUpdate(
            { name: 'productId' },
            { $inc: { seq: 1 } },
            { new: true, upsert: true }
        );
        this.productId = `PRD${counter.seq.toString().padStart(3, '0')}`;
    }
    next();
});

module.exports = mongoose.model('Product', productSchema);