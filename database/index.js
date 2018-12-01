const mongoose = require('mongoose');
const db = mongoose.connect('mongodb://localhost/exalted');
const { schema } = require('schema.js');

const Character = mongoose.model('Character', schema);

module.exports = { Character };
module.exports.connection = db;
