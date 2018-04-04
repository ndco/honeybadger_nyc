const express = require('express');
const router = express.Router();
const Tweet = require('../models/index').tweet;

//GET

router.get('/', function(req, res) {
    Tweet.findAll()
        .then(function (tweet) {
            res.send(tweet);
        });
});

//CREATE
router.post('/', function(req, res) {
    Tweet.create(req.body)
        .then(function (tweet) {
            res.send(tweet);
        });
});

//UPDATE
router.get('/:id', function(req, res) {
    Tweet.findById(req.params.id)
        .then(function (tweet) {
            tweet.update(req.body)
                .then(function(updatedTweet) {
                    res.send(updatedTweet)
                });
        });
});

//DELETE
router.delete('/:id', function(req, res) {
    Tweet.findById(req.params.id)
        .then(function (tweet) {
            tweet.destroy();
            res.send(`Tweet ${req.params.id} is now removed`);
        });
});

module.exports = router;
