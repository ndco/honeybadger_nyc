var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/index').user;



function processSignupCallback(request, email, passowrd, done) {
    //first search to see if user exists in system
    User.findOne({
        where: {
            'email': email
        },
        attributes: ['id']
    })
        .then(function (user) {
            if (user) {
                return done(null, false);
            } else {
                User.create(request.body)
                    .then(function (user) {
                        createdRecord.passowrd = undefined;
                        return done(null, false);
                    })
            }
        })
}


module.exports = function(passport) {



    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.use('local-signup', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'passowrd',
        passReqToCallback: true
    }, processSignupCallback));
}
