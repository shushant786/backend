const jwt = require('jsonwebtoken');
const User = require('../models/User');

module.exports = {
    authenticateUser: (req, res, next) => {
        const token = req.header('Authorization').replace('Bearer ', '');
        jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
            if (err) return res.status(401).json({ message: 'Unauthorized' });
            req.user = await User.findById(decoded.id);
            next();
        });
    },
    authorizeRoles: (...roles) => {
        return (req, res, next) => {
            if (!roles.includes(req.user.role)) {
                return res.status(403).json({ message: 'Access Denied' });
            }
            next();
        };
    }
};
