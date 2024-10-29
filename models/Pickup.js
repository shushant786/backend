const mongoose = require('mongoose');

const pickupSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  scrapItems: { type: String, required: true },
  scheduledDate: { type: Date, required: true },
  status: { type: String, default: 'Pending' },
});

module.exports = mongoose.model('Pickup', pickupSchema);
