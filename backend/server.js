const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../')));

// Helper function to get data
const getData = (filename) => {
    const filePath = path.join(__dirname, 'data', filename);
    if (fs.existsSync(filePath)) {
        try {
            const fileContent = fs.readFileSync(filePath, 'utf8');
            return JSON.parse(fileContent);
        } catch (err) {
            console.error('Error reading data file:', err);
            return [];
        }
    }
    return [];
};

// API Routes

// Contact Form - POST
app.post('/api/contact', (req, res) => {
    const { name, email, phone, message } = req.body;
    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Name, email, and message are required.' });
    }

    const newContact = {
        id: Date.now(),
        name,
        email,
        phone,
        message,
        date: new Date().toISOString() // Keep ISO format for easy sorting/display
    };

    saveData('messages.json', newContact);
    res.status(200).json({ message: 'Message received successfully!' });
});

// Contact Form - GET
app.get('/api/messages', (req, res) => {
    const messages = getData('messages.json');
    res.json(messages.reverse()); // Show newest first
});

// Newsletter Subscription - POST
app.post('/api/newsletter', (req, res) => {
    const { email } = req.body;
    if (!email) {
        return res.status(400).json({ error: 'Email is required.' });
    }

    const newSubscriber = {
        id: Date.now(),
        email,
        date: new Date().toISOString()
    };

    saveData('subscribers.json', newSubscriber);
    res.status(200).json({ message: 'Subscribed successfully!' });
});

// Newsletter Subscription - GET
app.get('/api/subscribers', (req, res) => {
    const subscribers = getData('subscribers.json');
    res.json(subscribers.reverse());
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
