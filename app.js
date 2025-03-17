const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const favicon = require('serve-favicon');
const path = require('path');

// Load environment variables
dotenv.config();

// Debug: Check if MONGODB_URI is loaded
console.log('MONGODB_URI:', process.env.MONGODB_URI);

const app = express();
app.use(express.json());


// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

// Default route
app.get('/', (req, res) => {
    res.send('Welcome to the Weather Report API');
});

// Routes
app.use('/api', userRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!',
    message: err.message, // Include the error message
    timestamp: new Date().toISOString() // Include a timestamp
    });
});

module.exports = app;