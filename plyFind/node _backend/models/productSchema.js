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
    dimensions:[ {
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
        }
    }],
    costPerUnitVolume: { 
        type: Number,
        required: true
    }
});

const Counter = require('./Counter');

productSchema.pre('save', async function(next) {
    if (!this.productId) {
        const counter = await Counter.findOneAndUpdate(
            { name: 'productId' },
            { $inc: { seq: 1 } },
            { new: true, upsert: true }
        );
        this.productId = `PRD${counter.seq.toString().padStart(3, '0')}`;
    }
    next();
});


module.exports = mongoose.model('Product', productSchema);