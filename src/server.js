const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Define routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/adoption', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'guineaPigAdoption.html'));
});

app.get('/care', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'guineaPigCare.html'));
});

app.get('/foods', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'guineaPigFoods.html'));
});

app.get('/history', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'guineaPigHistory.html'));
});

app.get('/life-daily', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'guineaPigLifeDaily.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
