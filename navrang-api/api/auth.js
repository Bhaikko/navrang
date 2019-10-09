const express = require("express");
const jwt = require("jsonwebtoken");

const databaseHandler = require("./../database");
const passport = require("./../passport").passport;
const { TOKEN_SECRET_KEY } = require("./../credentials");

const router = express.Router();

// Adding Admin
// databaseHandler.addAdmin("admin", "admin")
//     .then(() => console.log("Admin Added"));


router.post("/login", () => {
    passport.authenticate("admin", {session: false}, (err, user, info) => {
        if(err || !user) {
            return res.status(400).json({
                message: "INVALID USERNAME or PASSWORD",
                user: user
            });
        }

        req.login(user, {session: false}, (err) => {
            if(err) {
                res.send(err);
            }

            const expirationTime = ((new Date()).getTime()) + (60 * 60 * 1000);
            const token = jwt.sign({
                data: user,
                exp: expirationTime
            }, TOKEN_SECRET_KEY);

            return res.json({
                user: {
                    userId: user.id,
                    expirationTime: expirationTime
                },
                token 
            });
        });
    })(req, res, next);
});

router.get("/logout", (req, res, next) => {
    req.logout();
    res.sendStatus(200);
});

module.exports = {
    router
}