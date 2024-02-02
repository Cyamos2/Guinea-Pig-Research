// server.js

const express = require('express');
const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Set up routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/history', (req, res) => {
  res.sendFile(__dirname + '/public/history.html');
});

// Add the route for Guinea Pig Life Daily
app.get('/guineaPigLifeDaily', (req, res) => {
  res.sendFile(__dirname + '/public/guineaPigLifeDaily.html');
});

// Add more routes as needed

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
