const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define routes
app.get('/', (req, res) => {
  res.redirect('/guineaPigLifeDaily');
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

app.get('/guineaPigAdoption', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'guineaPigAdoption.html'));
});

app.get('/guineaPigLifeDaily', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'guineaPigLifeDaily.html'));
});

// Additional routes for other pages...

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
