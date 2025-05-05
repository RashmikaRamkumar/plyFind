const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userId: {
        type: String,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    orders: [{
        type: String,  // Will store orderIds
        ref: 'Order'
    }]
});

// Pre-save middleware to generate userId like "USR001", "USR002", etc.
userSchema.pre('save', async function(next) {
    if (!this.userId) {
        const counter = await mongoose.model('Counter').findOneAndUpdate(
            { name: 'userId' },
            { $inc: { seq: 1 } },
            { new: true, upsert: true }
        );
        this.userId = `USR${counter.seq.toString().padStart(3, '0')}`;
    }
    next();
});


module.exports = mongoose.model('User', userSchema);