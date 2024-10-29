const express = require('express');
const { createPickupRequest } = require('../controllers/pickupController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/customer/request', authMiddleware, createPickupRequest);

module.exports = router;
