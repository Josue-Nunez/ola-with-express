const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Ola Express');
});

app.get('/about', (req, res) => {
  res.send('Here\'s our about page');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
