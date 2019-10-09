const express = require("express");

const authRouter = require("./auth").router;
const adminRouter = require("./admin").router;
const publicRouter = require("./public").router;

const router = express.Router();

router.use("/admin", adminRouter);
router.use("/auth", authRouter);
router.use("/public", publicRouter);

module.exports = {
    router
}