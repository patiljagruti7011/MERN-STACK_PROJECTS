const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware to serve static files
app.use(express.static('public'));

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Handle GET request
app.get('/api/message', (req, res) => {
    res.json({ message: 'Hello, this is a GET response!' });
});

// Handle POST request
app.post('/api/message', (req, res) => {
    const { text } = req.body;
    res.json({ message: `You sent: ${text}` });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
