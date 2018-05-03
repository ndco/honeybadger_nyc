var express = require('express');
var router = express.Router();

//INDEX
router.get('/', function(req, res, next) {
	res.send('respond with a resource');
});

//CREATE

//DELETE

//UPDATE


module.exports = function (passport) {
	router.post('/signup', passport.authenticate('local-signup'), function(req, res) {
		res.json({ user: req.user });
	});

	router.post('/login', passport.authenticate('local-login'), function(req, res) {
		res.json({ user: req.user });
	});

	return router;
};
