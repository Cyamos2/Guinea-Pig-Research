const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/guineaPigHistory', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'guineaPigHistory.html'));
});

app.get('/guineaPigCare', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'guineaPigCare.html'));
});

app.get('/guineaPigFoods', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'guineaPigFoods.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
