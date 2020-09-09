const express = require('express');
const morgan = require('morgan');
const app = express();

app.get('/movies', (req, res) => {
  res.json(topTenMovies);
});

app.get('/', (req, res) => {
  res.send('Hello Node');
});

app.use(morgan('common'));
app.use(express.static('public'));
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Error occurred');
});

app.listen(8080, () => {
  console.log('Connected to port 8080');
});
