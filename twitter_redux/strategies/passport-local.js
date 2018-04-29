const LocalStategy = require('passport-local').Strategy;
const User = require('../models').user;
const bcrypt = require('bcrypt');

function processSignupCallback(req, email, password, done) {
    User.findOne({
        where: {
            'email':email
        },
        attributes: ['id']
    })
    .then(function(user) {
        if(user) {
            return done(null, false);
        } 
        
        const userToCrate = req.body;

        bcrypt.hash(userToCrate.password, 10, function(err, hasg) {
            userToCrate.password = hash;
            User.create(userToCrate)
                .then(function(user) {
                    user.password = undefined;
                    return done(null, user);
                });
        });
    });
}

function processLoginCallback(email, password, done) {
    User.findOne({
        where: {
            email
        }
    })
    .then(function(user) {
        if(!user) {
            return done(null, false);
        }

        bcrypt.compare(password, user.password, function(err, result) {
            user.password = undefined;
            return result ? done(null, user) : done(null, err);
        })
    })
    .catch(function(err) {
        return done(err, false);
    });
}

module.export = function(passport) {
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.use('local-signup', new LocalStategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true  
    }, processSignupCallback));

    passport.use('local-login', new LocalStategy({
        usernameField: 'email',
        passwordField: 'password'      
    }, processLoginCallback));
}
