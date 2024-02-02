const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Define routes for each page

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/history', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'history.html'));
});

app.get('/care', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'care.html'));
});

app.get('/foods', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'foods.html'));
});

app.get('/adoption', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'adoption.html'));
});

app.get('/life-daily', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'life-daily.html'));
});

// Add more routes if needed

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
