var express = require('express');
var router = express.Router();
var Tweets = require('../models/index').tweet;


//INDEX
router.get('/', function(req, res) {
    Tweets.findAll()
        .then(function(tweets) {
            res.send(tweets);
        });
});

//SHOW
router.get('/:id', function(req, res) {

})

//CREATE
router.post('/', function(req, res) {
    Tweets.create(req.body)
        .then(function(tweet) {
            res.send(tweet);
        });
});

//DESTROY

//DELETE


module.exports = router;
