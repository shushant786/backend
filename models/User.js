const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    role: { type: String, enum: ['customer', 'dealer', 'admin'], required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
});

module.exports = mongoose.model('User', userSchema);
