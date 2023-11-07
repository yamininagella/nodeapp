const express = require('express');
const app = express();
const port = 3000; // You can choose any available port

// Create a basic route
app.get('/', (req, res) => {
  res.send('Hello, this is a simple Node.js application!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
