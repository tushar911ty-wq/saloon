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
app.use(express.static(path.join(__dirname, '../public')));

// Helper function to save data
const saveData = (filename, data) => {
    const filePath = path.join(__dirname, 'data', filename);
    let existingData = [];
    if (fs.existsSync(filePath)) {
        try {
            const fileContent = fs.readFileSync(filePath, 'utf8');
            existingData = JSON.parse(fileContent);
        } catch (err) {
            console.error('Error reading data file:', err);
        }
    }
    existingData.push(data);
    fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2));
};

// API Routes

// Contact Form
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
        date: new Date().toISOString()
    };

    saveData('messages.json', newContact);
    res.status(200).json({ message: 'Message received successfully!' });
});

// Newsletter Subscription
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

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
