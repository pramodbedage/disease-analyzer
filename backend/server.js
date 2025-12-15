const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const diseaseRoutes = require('./routes/diseaseRoutes');
const chatRoutes = require('./routes/chatRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Body parser

// Routes
app.use('/api/diseases', diseaseRoutes);
app.use('/api/chat', chatRoutes);

// Base route
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
