const express = require('express');
const path = require('path');
const cors = require('cors');
const model = require('../database/model.js');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname, '../public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/exalted/:character', (req, res) => {
  // GET route for loading a character
});

app.post('/exalted/save', (req, res) => {
  // POST route for saving a character
  model.create(req.body, (err, character) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.sendStatus(201);
    }
  });
});

app.listen(port, () => console.log(`Server listening on port: ${port}`));
