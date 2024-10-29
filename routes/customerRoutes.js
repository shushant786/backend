const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');
const { authenticateUser, authorizeRoles } = require('../middleware/authMiddleware');

router.post('/request-pickup', authenticateUser, authorizeRoles('customer'), customerController.requestPickup);
router.post('/:id/feedback', authenticateUser, authorizeRoles('customer'), customerController.giveFeedback);

module.exports = router;
