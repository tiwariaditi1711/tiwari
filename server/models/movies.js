var mongoose = require('mongoose');

var movieSchema = mongoose.Schema({
  MovieName: String,
  Genre: String,
  Language: String,
  Duration: Number
});

var Movie = mongoose.model('Movie', movieSchema, 'Movies');

module.exports = Movie;
