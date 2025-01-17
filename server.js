const express = require('express');
const app = express();
const port = 3000;

let server; // Declare a variable to hold the server instance

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server only if it's not in a test environment
if (process.env.NODE_ENV !== 'test') {
  server = app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}

// Export the app and a function to start the server
module.exports = {
  app,
  startServer: () => {
    server = app.listen(port, () => {
      console.log(`Test server running on http://localhost:${port}`);
    });
    return server;
  },
  stopServer: () => {
    if (server) {
      server.close();
    }
  }
};
