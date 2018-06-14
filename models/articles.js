const mongoose = require('mongoose');

const { Schema } = mongoose;

const articlesSchema = new Schema({
  title: String,
  classFirst: String,
  classSecond: String,
  content: String,
});

module.exports = mongoose.model('article', articlesSchema, 'articles');
