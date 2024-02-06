const express = require('express');
const bodyParser = require('body-parser');
const connectDataBase = require('./db');
const userRoutes = require('./routes/userRoute');
const adminRoutes = require('./routes/adminRoute');
require('dotenv').config();

const app = express();

// Connect to MongoDB
connectDataBase();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/admin', adminRoutes);

// Start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
