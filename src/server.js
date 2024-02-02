const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

// Routes
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

// Add other routes as needed

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
