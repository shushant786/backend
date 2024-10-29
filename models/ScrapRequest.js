const mongoose = require('mongoose');

const scrapRequestSchema = new mongoose.Schema({
    customer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    dealer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    pickupDate: Date,
    status: { type: String, enum: ['pending', 'accepted', 'completed'], default: 'pending' },
    feedback: String,
    rating: Number,
});

module.exports = mongoose.model('ScrapRequest', scrapRequestSchema);
