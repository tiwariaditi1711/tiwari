var express = require('express');
var router = express.Router();
var MovieModel = require('../models/movies');

router.get('/GetMovie', function(req, res) {
  MovieModel.find({},function(err, docs){
    res.json(docs);
  });
});

router.post('/AddMovie', function(req, res){
  var Movie = new MovieModel({
      MovieName: req.body.MovieName,
      Genre: req.body.Genre,
      Language: req.body.Language,
      Duration: req.body.Duration
  });
  Movie.save(function(err, docs){
    console.log("Movie Saved Successfully");
  });
});

router.delete('/DeleteMovie/:id', function(req, res){
  MovieModel.remove({_id: req.params.id},function(err, docs){
    console.log('Movie Removed Successfully');
  });
});

router.put('/EditMovie/:MovieName', function(req, res){
  MovieModel.findOneAndUpdate({MovieName: req.params.MovieName},{$set:{
    Genre: req.body.Genre,
    Language: req.body.Language,
    Duration: req.body.Duration
  }},function(err, docs){
    if(err){
      console.log('Something Wrong');
    }
  });
  console.log("Movie Edited Successfully");
});

module.exports = router;
