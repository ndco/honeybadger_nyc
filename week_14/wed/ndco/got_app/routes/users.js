var express = require('express');
var router = express.Router();
const House = require('../models/index').house;
const Human = require('../models/index').humnan;
const Weapon = require('../models/index').weapon;

const All = require('../models/index');

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(All);
  res.send(All);
  House.findAll()
    .then(function(result) {
      // res.send(result);
    })
});

//SHOW
router.get('/:id', function(req, res) {
  House.findById(req.params.id)
    .then(function(result) {
      res.send(house);
    });
});

router.get('/:id', async function(req, res) {
  const house = await House.findById(req.params.id);
  res.send(house);
})


//CREATE
router.post('/', function(req, res, next) {
  const params = {
    name: req.body.name,
    sigil: req.body.sigil,
    region: req.body.region
  };
  House.create(params)
    .then(function(result){
      res.send(result);
    });
;})


//UPDATE
router.put('/:id', function(req, res) {
  const { name, sigil, region } = req.body;
  const params = {
    name,
    sigil,
    region
  }
  House.findById(req.params.id)
    .then(function(result) {
      result.update(params)
        .then(function(updatedResult) {
          res.send(updatedResult);
        });
    });
});


//DETORY
router.delete('/:id', function(req, res) {

})


module.exports = router;
