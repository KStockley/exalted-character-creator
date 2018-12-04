const connection = require('./connection');
const schema = require('./schema.js');

module.exports = connection.model('Character', schema);
