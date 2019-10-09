const express = require("express");
const bcrypt = require("bcrypt");

const databaseHandler = require("./../database");

const router = express.Router();

// Adding Admin
// databaseHandler.addAdmin("admin", "admin")
//     .then(() => console.log("Admin Added"));


router.post("/login", () => {});

router.get("/logout", (req, res, next) => {
    req.logout();
    res.sendStatus(200);
});

module.exports = {
    router
}