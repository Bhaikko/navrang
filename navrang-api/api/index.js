const express = require("express");

const authRouter = require("./auth").router;
const adminRouter = require("./admin").router;
const publicRouter = require("./public").router;

const passport = require("./../passport").passport;

const router = express.Router();

router.use("/admin", passport.authenticate("jwt", { session: false }), adminRouter);
router.use("/auth", authRouter);
router.use("/public", publicRouter);

module.exports = {
    router
}