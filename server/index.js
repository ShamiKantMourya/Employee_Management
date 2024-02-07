const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");

const connectDataBase = require('./db');
const userRoutes = require('./routes/userRoute');
const adminRoutes = require('./routes/adminRoute');


require('dotenv').config();

const app = express();

// Connect to MongoDB
connectDataBase();

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true}));

// Routes
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/admin', adminRoutes);

// Start server
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
