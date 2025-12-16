const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const diseaseRoutes = require('./routes/diseaseRoutes');
const chatRoutes = require('./routes/chatRoutes');
const userRoutes = require('./routes/userRoutes'); // Import user routes
const colors = require('colors');
const path = require('path');

dotenv.config({ path: './backend/.env' });

connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Body parser
app.use(express.urlencoded({ extended: false }));

// Serve static files
app.use(express.static(__dirname));

// Routes
app.use('/api/diseases', diseaseRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api/users', userRoutes); // Use user routes

app.use(errorHandler);

// Base route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'test_api.html'));
});

app.get('/chatbot.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'chatbot.html'));
});

app.get('/test.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'test.html'));
});


// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
