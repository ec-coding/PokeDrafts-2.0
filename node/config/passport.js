const mongoose = require('mongoose')
const User = require('../models/user')
const passportJWT = require("passport-jwt");
const JWTStrategy   = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

module.exports = function(passport) {
    passport.use(new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey   : process.env.JWT_SECRET
    },
    function (jwtPayload, cb) {
// console.log(jwtPayload)
        //find the user in db if needed. This functionality may be omitted if you store everything you'll need in JWT payload.
        return User.findOne({ googleId: jwtPayload.email })
            .then(user => {
                return cb(null, user);
            })
            .catch(err => {
                return cb(err);
            });
        }
    ));
}

// Look up hashing + salt & pepper for site-based sign-up
// CROSS-SITE SCRIPTING XSS 
// CROSS-SITE REQUEST FORGERY CSRF 
// Super short term access token - refresh token (stored in http-only secure cookie - nobody can take these)
// CSRF Token - Prevents people using your token - syncs front-end and back-end
// Man in the middle - public wifi - packet sniffing - detect + alter traffic (https + certificate can help prevent this)