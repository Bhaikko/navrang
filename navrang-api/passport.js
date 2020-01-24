const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const passportJWT = require("passport-jwt");

const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

const { Admins } = require("./database/database");
const { TOKEN_SECRET_KEY } = require("./environments");

passport.use("admin", new LocalStrategy({
    usernameField: "username",
    passwordField: "password"
}, (username, password, done) => {
    Admins.findOne({
        where: {
            username 
        }
    })
        .then(admin => {
            if(!admin) {
                return done(null, false);
            }

            if(password == admin.password) {
                return done(null, admin);
            } else {
                return done(null, false);
            }
        })
        .catch(console.log);
}));

passport.use("jwt", new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderWithScheme("JWT"),
    secretOrKey: TOKEN_SECRET_KEY   
}, (jwtPayload, done) => {
    return Admins.findOne({
        where: jwtPayload.id 
    })
        .then(admin => done(null, admin))
        .catch(err => done(err));
}));

module.exports = {
    passport
}