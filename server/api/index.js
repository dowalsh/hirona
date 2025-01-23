// Import the express and cors modules
import express from 'express';
import cors from 'cors';

// Create an instance of the Express application
const app = express();

// Define CORS options (you can restrict the origins if necessary)
const corsOptions = {
  origin: "*",  // Allows all origins; update this to be more restrictive if necessary
};

// Apply CORS middleware globally
app.use(cors(corsOptions));

// Define a simple GET route for the root path
app.get('/', (_, res) => {
  res.send('Welcome to the server!');
});

// Define a simple GET route for testing communication
app.get('/api/test', (req, res) => {
  res.json({ message: 'Hello from Backend!' });
});

// Export the Express app so Vercel can use it as a serverless function
export default app;
