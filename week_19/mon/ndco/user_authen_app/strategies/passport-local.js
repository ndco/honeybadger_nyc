var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/index').user;

function processSignupCallback(request, email, password, done) {
    // first search is to see if a user exists in our system with that email
    User.findOne({
        where: {
            'email': email
        },
        attributes: ['id']
    })
    .then(function(user) {
        if(user) {
            //user exists call done() passing ull and false
            return done(null, false);
        } else {
            // create the new user
            var userToCreate = request.body; //make this more secure

            User.create(userToCreate)
            .then(function(createdRecord) {
                //once user is created, call done with the created user
                createdRecord.password = undefined;
                return done(null, createdRecord);
            });
        }

    });
}

module.exports = function(passport) {
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.use('local-signup', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    }, processSignupCallback));

};