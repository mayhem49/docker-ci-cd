// Import the express module
const express = require('express');

// Create an instance of an Express application
const app = express();

// Define a simple route for the home page
app.get('/', (req, res) => {
  // to trigger
  res.send('Hello, world!');
});

// Set the port to listen on (e.g., 3000)
const PORT = process.env.PORT || 3000;

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
