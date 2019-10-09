const express = require("express");

const databaseHandler = require("../database"); 

const router = express.Router();

router.get("/achievements", (req, res, next) => {
    databaseHandler.getAchievements()
        .then(achievements => res.send(achievements))
        .catch(err => res.sendStatus(400));
});


router.get("/issues", (req, res, next) => {
    databaseHandler.getIssues()
        .then(issues => res.send(issues))
        .catch(err => res.sendStatus(400));
});

router.get("/events", (req, res, next) => {
    databaseHandler.getEvents()
        .then(events => res.send(events))
        .catch(err => res.sendStatus(400));
});



router.get("/team", (req, res, next) => {
    databaseHandler.getTeam()
        .then(team => res.send(team))
        .catch(err => res.sendStatus(400));
});



router.get("/notices", (req, res, next) => {
    databaseHandler.getNotices()
        .then(notices => res.send(notices))
        .catch(err => res.sendStatus(400));
});

module.exports = {
    router
}