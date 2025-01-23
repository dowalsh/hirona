// Import the express module, which is a web framework for Node.js
express = require('express');

// Create an instance of an Express application
const app = express();

// Define the port number on which the server will listen
// It will use the port defined in the environment variable PORT, or default to 5001 if not set
const PORT = process.env.PORT || 5001;

// Define a simple GET route for the root path
app.get('/', (req, res) => {
    res.send('Welcome to the server!');
});
// Define a simple GET route for testing the communication between frontend and backend
// When a GET request is made to the /api/test endpoint, the server will respond with a JSON object
app.get('/api/test', (req, res) => {
    // Send a JSON response with a message
    res.json({ message: 'Hello from Backend!' });
});
// Start the server and have it listen on the defined port
// When the server starts, it will log a message to the console with the URL
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;