const express = require("express");
const multer = require("multer");

const databaseHandler = require("../database"); 

const { UPLOADS_DIRECTORY } = require("./../credentials");

const router = express.Router();
const upload = multer({ dest: './uploads' });

router.post("/achievements", upload.single("files"), (req, res, next) => {
    databaseHandler.addAchievment(
        req.body.title, 
        req.body.subtitle,
        req.body.content,
        req.body.date,
        UPLOADS_DIRECTORY + req.file.filename
    )
        .then(response => res.sendStatus(200))
        .catch(err => res.sendStatus(400));
});

router.delete("/achievements/:id", (req, res, next) => {

    databaseHandler.deleteAchievement(req.params.id)
        .then(response => res.sendStatus(200))
        .catch(err => res.sendStatus(400));
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

router.delete("/issues/:id", (req, res, next) => {
    databaseHandler.deleteIssue(req.params.id)
        .then(response => res.sendStatus(200))
        .catch(err => res.sendStatus(400));
});

router.post("/events", upload.single("files"), (req, res, next) => {

    databaseHandler.addEvent(
        req.body.name,
        req.body.lastDate,
        req.body.registrationLink,
        UPLOADS_DIRECTORY + req.file.filename,
        req.body.info 
    )
        .then(response => res.sendStatus(200))
        .catch(err => res.sendStatus(400));
});

router.delete("/events/:id", (req, res, next) => {
    const id = req.params.id

    databaseHandler.deleteEvent(id)
        .then(response => res.sendStatus(200))
        .catch(err => res.sendStatus(400));
});

router.post("/team", upload.single("files"), (req, res, next) => {
    databaseHandler.addTeam(
        req.body.name,
        req.body.designation,
        req.body.about,
        req.body.contactLink,
        UPLOADS_DIRECTORY + req.file.filename
    )
        .then(response => res.sendStatus(200))
        .catch(err => res.sendStatus(400));
});

router.delete("/team/:id", (req, res, next) => {
    databaseHandler.deleteTeam(req.params.id)
        .then(response => res.sendStatus(200))
        .catch(err => res.sendStatus(400));
});

router.post("/notices", upload.single("files"), (req, res, next) => {
    databaseHandler.addNotice(
        req.body.title, 
        req.body.content,
        req.body.name,
        req.body.designation,
        req.body.date,
        UPLOADS_DIRECTORY + req.file.filename
    )
        .then(response => res.sendStatus(200))
        .catch(err => res.sendStatus(400));
});

router.delete("/notices/:id", (req, res, next) => {
    databaseHandler.deleteNotice(req.params.id)
        .then(response => res.sendStatus(200))
        .catch(err => res.sendStatus(400));
});

router.post("/contacts", upload.single("files"), (req, res, next) => {

    databaseHandler.addContact(
        req.body.name,
        req.body.phone,
        req.body.email
    )
        .then(response => res.sendStatus(200))
        .catch(err => res.sendStatus(400));
});

router.delete("/contacts/:id", (req, res, next) => {
    databaseHandler.deleteContact(req.params.id)
        .then(response => res.sendStatus(200))
        .catch(err => res.sendStatus(400));
});

module.exports = {
    router
}