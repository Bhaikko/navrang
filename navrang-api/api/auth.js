const express = require("express");
const jwt = require("jsonwebtoken");

const passport = require("./../passport").passport;
const { TOKEN_SECRET_KEY } = require("./../environments");

const router = express.Router();

router.post("/login", (req, res, next) => {
    passport.authenticate("admin", { session: false }, (err, user, info) => {
        if(err || !user) {
            return res.status(400).json({
                message: "INVALID USERNAME or PASSWORD"
            });
        }

        req.login(user, {session: false}, (err) => {
            if(err) {
                res.send(err);
            }
            const token = jwt.sign({
                data: user,
            }, TOKEN_SECRET_KEY);

            return res.json({
                token,
                userId: user.id 
            });
        });
    })(req, res, next);
});


module.exports = {
    router
}