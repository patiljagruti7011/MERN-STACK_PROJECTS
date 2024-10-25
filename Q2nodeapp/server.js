const express = require('express');
const path = require('path');

const app = express();
const PORT = 4000;

// Serve static HTML file
app.use(express.static(path.join(__dirname, 'public')));

// Define the /gethello route
app.get('/gethello', (req, res) => {
    res.send('Hello NodeJS!!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
