const Pickup = require('../models/Pickup');

exports.createPickupRequest = async (req, res) => {
  const { scrapItems, scheduledDate } = req.body;
  try {
    const pickup = new Pickup({
      userId: req.user.id,
      scrapItems,
      scheduledDate,
    });
    await pickup.save();
    res.json({ message: 'Pickup request created', pickup });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
