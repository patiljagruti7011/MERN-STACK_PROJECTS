// server.js
const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const { getResponse } = require('./chatbot');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.use(express.static('public')); // Serve static files from the public directory

wss.on('connection', (ws) => {
    ws.on('message', (message) => {
        console.log(`Received: ${message}`);
        const response = getResponse(message);
        ws.send(response); // Send response back to the client
    });
    
    ws.send('Welcome to the WebSocket Chatbot!'); // Initial message
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
