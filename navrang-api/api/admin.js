const express = require("express");
const multer = require("multer");

const databaseHandler = require("../database"); 

const router = express.Router();
const upload = multer({ dest: "/uploads/" });

router.post("/achievements", upload.single("image"), (req, res, next) => {
    databaseHandler.addAchievment(
        req.body.title, 
        req.body.subtitle,
        req.body.content,
        req.body.date,
        req.file.filename
    )
        .then(response => res.send(200))
        .catch(err => res.sendStatus(400));
});

router.post("/issues", (req, res, next) => {
    databaseHandler.addIssue(
        req.body.senderName,
        req.body.senderEmail,
        req.body.content,
        req.body.date
    )
        .then(response => res.send(200))
        .catch(err => res.sendStatus(400));
});

router.post("/events", upload.single("image"), (req, res, next) => {
    databaseHandler.addEvent(
        req.body.lastDate,
        req.body.registrationLink,
        req.file.filename,
        req.body.info 
    )
        .then(response => res.send(200))
        .catch(err => res.sendStatus(400));
});
router.post("/team", upload.single("image"), (req, res, next) => {
    databaseHandler.addTeam(
        req.body.name,
        req.body.designation,
        req.body.about,
        req.body.contactLink,
        req.file.filename
    )
        .then(response => res.send(200))
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
        .then(response => res.send(200))
        .catch(err => res.sendStatus(400));
});

module.exports = {
    router
}