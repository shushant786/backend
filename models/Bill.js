const mongoose = require('mongoose');

const billSchema = new mongoose.Schema({
    dealer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    customer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    items: [
        {
            itemName: String,
            quantity: Number,
            price: Number,
        }
    ],
    totalAmount: Number,
    date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Bill', billSchema);
