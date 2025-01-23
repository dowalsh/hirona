// Import the express module, which is a web framework for Node.js
import express from 'express';

// Create an instance of an Express application
const app = express();

// Define the port number on which the server will listen
// It will use the port defined in the environment variable PORT, or default to 5001 if not set
const PORT = process.env.PORT || 5001;

// Import the cors module, which is used to enable Cross-Origin Resource Sharing (CORS)
// This allows your backend to accept requests from different origins (e.g., your frontend)
import cors from 'cors';


const allowedOrigins = ['https://hirona-client.vercel.app'];

app.use(cors({
  origin: function(origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));

// Define a simple GET route for the root path
app.get('/', (_, res) => {
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
