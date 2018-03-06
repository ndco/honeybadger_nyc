import { request } from 'http';

var express = require('express');
var router = express.Router();

const Painting = require('../models.index').painting;

function destructureData(req) {
    const { title, img_url, year_made } = req.body;
    const params = { title, img_url, year_made };
    return params;
}

/* GET users listing. */
router.get('/', function(req, res) {
    Painting.findAll()
        .then(function(painting) {
            res.send(painting);
        });
});

//SHOW
router.get('/:id', function(req, res) {
    Painting.findById(req.params.id)
        .then(function(painting) {
            res.send(painting);
        });
});

//CREATE
router.post('/', function(req, res) {
    const { title, img_url, year_made } = req.body;
    const params = { title, img_url, year_made };
    Painting.create(params)
        .then(function(newPainting) {
            res.send(newPainting);
        });
});

//UPDATE
router.put('/:id', function(req, res) {
    const params = destructureData(req);
    Painting.findById(req.params.id)
        .then(function(painting) {
            painting.update(params)
        })
            .then(function(updatedPainting) {
                res.send(updatedPainting);
            });
});

//DESTROY
router.


module.exports = router;
