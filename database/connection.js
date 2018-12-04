const mongoose = require('mongoose');

const options = {
  useNewUrlParser: true,
};

module.exports = mongoose.createConnection('mongodb://localhost:27017/exalted', options);
