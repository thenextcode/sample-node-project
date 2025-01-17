const express = require('express');
const app = express();
const port = 3000;

let server; // Add a variable to hold the server instance

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
if (process.env.NODE_ENV !== 'test') {
  server = app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}

// Export the app and server instance for testing
module.exports = { app, server };
