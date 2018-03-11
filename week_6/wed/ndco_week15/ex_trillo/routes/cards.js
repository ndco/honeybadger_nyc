var express = require('express');
var router = express.Router();

const Card = require('../models/index').card;

function destructureData (req) {
   const { title, description, stauts } = req.body;
   return {
       title,
       description,
       status
   }; 
};



/* GET users listing. */
router.get('/', function (req, res) {
    Card.findAll()
        .then(function(card) {
            res.send(card);
        });
});

//SHOW
router.get('/:id', function (req, res) {
    Card.findById(req.params.id)
        .then(function(card) {
            res.send(card);
        });
});


//CREATE
router.post('/', function(req, res) {
    Card.create(destructureData(req))
        .then(function(card) {
            res.send(card);
        });
});


//UDATE
router.put('/:id', function(req, res) {
    Card.findById(req.params.id)
        .then(function(card) {
            card.update(destructureData(req))
            .then(function(updatedCard) {
                res.send(updatedCard);
            });
        });
});


//DESTROY
router.delete('/:id', function(req, res) {
    Card.findById(req.params.id)
        .then(function(card) {
            card.destory()
            console.log('card has removed')
        });
});

module.exports = router;
