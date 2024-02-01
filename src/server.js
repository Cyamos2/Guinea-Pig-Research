// server.js
const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/guineaPigCare.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/guineaPigCare.html'));
});

app.get('/guineaPigHistory.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/guineaPigHistory.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
