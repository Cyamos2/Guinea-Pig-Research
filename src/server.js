const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// New route for guinea pig adoption page
app.get('/guineaPigAdoption', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'guineaPigAdoption.html'));
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

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
