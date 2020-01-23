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

router.get("/front", (req, res, next) => {
    databaseHandler.getFrontPageData()
        .then(data => res.send(data))
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

router.get("/contacts", (req, res, next) => {
    databaseHandler.getContacts()
        .then(contacts => res.send(contacts))
        .catch(err => res.sendStatus(400));
});

router.post("/issues", (req, res, next) => {
    databaseHandler.addIssue(
        req.body.senderName,
        req.body.senderEmail,
        req.body.content,
        req.body.date
    )
        .then(response => {
            res.status(201).json({
                message: "Thank you for reaching out us. We'll try to reach you as soon as Possible."
            });
        })
        .catch(err => {
            res.status(400).json({
                message: "Something Went wrong."
            });
        });
});

module.exports = {
    router
}