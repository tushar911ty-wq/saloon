const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
// Basic Authentication Middleware
const auth = (req, res, next) => {
    // Check if the request is for admin.html
    if (req.path === '/admin.html') {
        const authHeader = req.headers.authorization;

        if (!authHeader) {
            res.setHeader('WWW-Authenticate', 'Basic');
            return res.status(401).send('Authentication required');
        }

        const auth = Buffer.from(authHeader.split(' ')[1], 'base64').toString().split(':');
        const user = auth[0];
        const pass = auth[1];

        // HARDCODED CREDENTIALS - CHANGE FOR PRODUCTION
        if (user === 'admin' && pass === 'admin123') {
            next();
        } else {
            res.setHeader('WWW-Authenticate', 'Basic');
            return res.status(401).send('Access denied');
        }
    } else {
        next();
    }
};

app.use(auth);
app.use(express.static(path.join(__dirname, '../')));

// Helper function to get data
const getData = (filename) => {
    const filePath = path.join(__dirname, 'data', filename);
    if (fs.existsSync(filePath)) {
        try {
            const fileContent = fs.readFileSync(filePath, 'utf8');
            const data = JSON.parse(fileContent);
            return Array.isArray(data) ? data : [];
        } catch (err) {
            console.error('Error reading data file:', err);
            return [];
        }
    }
    return [];
};

// Helper function to save data
const saveData = (filename, newData) => {
    const dataDir = path.join(__dirname, 'data');
    if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir);
    }

    const filePath = path.join(dataDir, filename);
    let currentData = getData(filename); // Reuse getData to get existing array

    currentData.push(newData);

    try {
        fs.writeFileSync(filePath, JSON.stringify(currentData, null, 2));
    } catch (err) {
        console.error('Error writing data file:', err);
    }
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
