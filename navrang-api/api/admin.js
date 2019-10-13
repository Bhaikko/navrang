const express = require("express");
const multer = require("multer");

const databaseHandler = require("../database"); 

const router = express.Router();
const upload = multer({ dest: "./../uploads" });

router.post("/achievements", upload.single("files"), (req, res, next) => {
    databaseHandler.addAchievment(
        req.body.title, 
        req.body.subtitle,
        req.body.content,
        req.body.date,
        req.file.filename
    )
        .then(response => res.sendStatus(200))
        .catch(err => res.sendStatus(400));
});

router.delete("/achievements", (req, res, next) => {
    databaseHandler.deleteAchievement(req.body.id)
        .then(response => res.sendStatus(200))
        .catch(err => res.send(400));
});

router.post("/issues", (req, res, next) => {
    databaseHandler.addIssue(
        req.body.senderName,
        req.body.senderEmail,
        req.body.content,
        req.body.date
    )
        .then(response => res.sendStatus(200))
        .catch(err => res.sendStatus(400));
});

router.delete("/issues", (req, res, next) => {
    databaseHandler.deleteIssue(req.body.id)
        .then(response => res.sendStatus(200))
        .catch(err => res.sendStatus(400));
});

router.post("/events", upload.single("files"), (req, res, next) => {

    databaseHandler.addEvent(
        req.body.name,
        req.body.lastDate,
        req.body.registrationLink,
        req.file.filename,
        req.body.info 
    )
        .then(response => res.sendStatus(200))
        .catch(err => res.sendStatus(400));
});

router.delete("/events", (req, res, next) => {
    databaseHandler.deleteEvent(req.body.id)
        .then(response => res.sendStatus(200))
        .catch(err => res.sendStatus(400));
});

router.post("/team", upload.single("files"), (req, res, next) => {
    databaseHandler.addTeam(
        req.body.name,
        req.body.designation,
        req.body.about,
        req.body.contactLink,
        req.file.filename
    )
        .then(response => res.sendStatus(200))
        .catch(err => res.sendStatus(400));
});

router.delete("/team", (req, res, next) => {
    databaseHandler.deleteTeam(req.body.id)
        .then(response => res.sendStatus(200))
        .catch(err => res.sendStatus(400));
});

router.post("/notices", (req, res, next) => {
    databaseHandler.addNotice(
        req.body.title, 
        req.body.content,
        req.body.name,
        req.body.designation,
        req.body.date,
        req.body.fileLink
    )
        .then(response => res.sendStatus(200))
        .catch(err => res.sendStatus(400));
});

router.delete("/notices", (req, res, next) => {
    databaseHandler.deleteNotice(req.body.id)
        .then(response => res.sendStatus(200))
        .catch(err => res.sendStatus(400));
});

router.post("/contacts", (req, res, next) => {
    console.log(req.body);
    databaseHandler.addContact(
        req.body.name,
        req.body.phone,
        req.body.email
    )
        .then(response => res.sendStatus(200))
        .catch(err => res.sendStatus(400));
});

router.delete("/contacts", (req, res, next) => {
    databaseHandler.deleteContact(req.body.id)
        .then(response => res.sendStatus(200))
        .catch(err => res.sendStatus(400));
});

module.exports = {
    router
}