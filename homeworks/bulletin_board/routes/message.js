var express = require('express');
var router = express.Router();
var Message = require('../models/index').message;

//INDEX
router.get('/', function(req, res) {
    Message.findAll()
        .then(function(data) {
            res.render('message', { data: data });
        })
})


//CREATE
router.get('/new', function(req, res) {
    res.render('new');
})

function validMsg(message) {
    console.log(message);
    return message.title !== '' &&
           message.body !== ''
}

router.post('/', function(req, res) {
    if(validMsg(req.body)) {
        Message.create(req.body)
        res.redirect('/messages/new');
    } else {
        res.status(500);
        res.render('error', {
            message: 'Invalid Post'
        });
    }
})

module.exports = router;
