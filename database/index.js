const mongoose = require('mongoose');
const { schema } = require('schema.js');

const options = {
  useNewUrlParser: true,
};

const db = mongoose.connect('mongodb://localhost:27017/exalted', options);
const Character = mongoose.model('Character', schema);

module.exports = { Character };
module.exports = { db };
