const express = require('express');
const path = require('path');
const cors = require('cors');
const { db, Character } = require('../database/index.js');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname, '../public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/exalted', (req, res) => {
  // GET route for characters
});

app.listen(port, () => console.log(`Server listening on port: ${port}`));
