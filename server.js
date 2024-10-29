const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const customerRoutes = require('./routes/customerRoutes');
const dealerRoutes = require('./routes/dealerRoutes');
const adminRoutes = require('./routes/adminRoutes');

dotenv.config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

app.use('/api/auth', authRoutes);
app.use('/api/customer', customerRoutes);
app.use('/api/dealer', dealerRoutes);
app.use('/api/admin', adminRoutes);

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
