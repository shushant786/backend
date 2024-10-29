const ScrapRequest = require('../models/ScrapRequest');

exports.requestPickup = async (req, res) => {
    const { pickupDate } = req.body;
    const scrapRequest = new ScrapRequest({ customer: req.user._id, pickupDate });
    await scrapRequest.save();
    res.status(201).json({ message: 'Scrap pickup requested' });
};

exports.giveFeedback = async (req, res) => {
    const { feedback, rating } = req.body;
    const scrapRequest = await ScrapRequest.findById(req.params.id);
    if (scrapRequest && scrapRequest.customer.equals(req.user._id)) {
        scrapRequest.feedback = feedback;
        scrapRequest.rating = rating;
        await scrapRequest.save();
        res.json({ message: 'Feedback provided' });
    } else {
        res.status(404).json({ message: 'Scrap request not found' });
    }
};
