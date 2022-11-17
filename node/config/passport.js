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
console.log(jwtPayload)
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