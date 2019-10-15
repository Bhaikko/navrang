const express = require("express");
const multer = require("multer");
const fs = require("fs");

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

    databaseHandler.getAchievement(req.params.id)
        .then(achievement => {
            const acheivementSplitArray = achievement.imageUrl.split("/");
            const filePath = __dirname + "/../uploads/" + acheivementSplitArray[acheivementSplitArray.length - 1];
            try {
                fs.unlinkSync(filePath);
            } catch {
                
            }

            databaseHandler.deleteAchievement(req.params.id)
                .then(response => res.sendStatus(200))
                .catch(err => res.sendStatus(400));
        });

    
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
    const id = req.params.id;

    databaseHandler.getEvent(id)
        .then(event => {
            const eventArray = event.imageLink.split("/");
            const filePath = __dirname + "/../uploads/" + eventArray[eventArray.length - 1];
            try {
                fs.unlinkSync(filePath);
            } catch {
                
            }

            databaseHandler.deleteEvent(id)
                .then(response => res.sendStatus(200))
                .catch(err => res.sendStatus(400));
        })
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

    databaseHandler.getTeamMember(req.params.id)
        .then(team => {
            const teamArray = team.imageLink.split("/");
            const filePath = __dirname + "/../uploads/" + teamArray[teamArray.length - 1];
            try {
                fs.unlinkSync(filePath);
            } catch {
                
            }
            databaseHandler.deleteTeam(req.params.id)
                .then(response => res.sendStatus(200))
                .catch(err => res.sendStatus(400));
        })
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

    databaseHandler.getNotice(req.params.id)
        .then(notice => {
            const noticeArray = notice.fileLink.split("/");
            const filePath = __dirname + "/../uploads/" + noticeArray[noticeArray.length - 1];
            try {
                fs.unlinkSync(filePath);
            } catch {
                
            }
            databaseHandler.deleteNotice(req.params.id)
                .then(response => res.sendStatus(200))
                .catch(err => res.sendStatus(400));
        })
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