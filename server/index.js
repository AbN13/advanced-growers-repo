// index.js
const express = require('express');
const app = express();
const port = 3000; // A different port than your React frontend

app.get('/', (req, res) => {
  res.send('Hello from Advanced Growers Full Stack Farms Oz!');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});