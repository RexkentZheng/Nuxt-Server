const mongoose = require('mongoose');

const { Schema } = mongoose;

const confSchema = new Schema({
  class: {
    classFirst: String,
    classSecond: Array,
  },
});

module.exports = mongoose.model('config', confSchema, 'config');
