const ScrapRequest = require('../models/ScrapRequest');
const Bill = require('../models/Bill');

exports.acceptRequest = async (req, res) => {
    const scrapRequest = await ScrapRequest.findById(req.params.id);
    if (scrapRequest) {
        scrapRequest.status = 'accepted';
        scrapRequest.dealer = req.user._id;
        await scrapRequest.save();
        res.json({ message: 'Scrap request accepted' });
    } else {
        res.status(404).json({ message: 'Scrap request not found' });
    }
};

exports.generateBill = async (req, res) => {
    const { items } = req.body;
    const totalAmount = items.reduce((sum, item) => sum + item.quantity * item.price, 0);
    const bill = new Bill({ dealer: req.user._id, customer: req.params.customerId, items, totalAmount });
    await bill.save();
    res.json({ message: 'Bill generated', bill });
};
