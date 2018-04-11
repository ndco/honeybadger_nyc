var express = require('express');
var router = express.Router();

module.exports = function (passport) {
  
  // POST /user/signup
  router.post('/signup', passport.authenticate('local-signup'), function (req, res) {
    res.json({user: req.user}) // passport will add this to the req
  });

  return router;
};
