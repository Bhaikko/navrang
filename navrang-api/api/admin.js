// const {  } = require("./../credentials");

const express = require("express");

const databaseHandler = require("../database"); 

const router = express.Router();
// const client = require("twilio")(TWILIO_ACC_SID, TWILIO_AUTH_TOKEN);
// const mailgun = require("mailgun-js");
// const mg = mailgun({apiKey: MAIL_GUN_API_KEY, domain: MAIL_GUN_DOMAIN});

const errorHandler = (res, err) => {
    console.log(err);
    res.status(400).json({
        message: "Something Went Wrong"
    });
}

const responseHandler = (res, message) => {
    res.status(201).json({
        message: message
    });
}

router.get("/issues", (req, res, next) => {
    databaseHandler.getIssues()
        .then(response => {
            res.status(200).json({
                issues: response
            });
        })
        .catch(err => {
            errorHandler(res, err);
        });
});


router.get("/contacts", (req, res, next) => {
    databaseHandler.getContacts()
        .then(response => {
            res.status(200).json({
                conracts: response
            });
        })
        .catch(err => {
            errorHandler(res, err);
        });
});

router.post("/achievements", (req, res, next) => {
    databaseHandler.addAchievment(
        req.body.title, 
        req.body.subtitle,
        req.body.content,
        req.body.date,
        req.body.imageUrl,
        req.body.imagePublicId
    )
        .then(response => {
            responseHandler(res, "Achievement Added Successfully");
        })
        .catch(err => {
            errorHandler(res, err);
        });
});

router.delete("/achievements", (req, res, next) => {
    databaseHandler.deleteAchievement(req.body.id)
        .then(response => {
            responseHandler(res, "Achievement Deleted Successfully");
        })
        .catch(err => {
            errorHandler(res, err);
        });
    
});

router.delete("/issues", (req, res, next) => {
    databaseHandler.deleteIssue(req.params.id)
        .then(response => {
            responseHandler(res, "Issue Deleted Successfully");
        })
        .catch(err => {
            errorHandler(res, err);
        });
});

router.post("/events", (req, res, next) => {

    databaseHandler.addEvent(
        req.body.name,
        req.body.lastDate,
        req.body.registrationLink,
        req.body.imageUrl,
        req.body.info, 
        req.body.imagePublicId
    )
        .then(response => {
            responseHandler(res, "Event Added Successfully");
        })
        .catch(err => {
            errorHandler(res, err);
        });
});

router.delete("/events", (req, res, next) => {
    databaseHandler.deleteEvent(req.body.id)
        .then(response => {
            responseHandler(res, "Event Deleted Successfully.");
        })
        .catch(err => {
            errorHandler(res, err);
        });

});

router.post("/team", (req, res, next) => {
    databaseHandler.addTeam(
        req.body.name,
        req.body.designation,
        req.body.about,
        req.body.contactLink,
        req.file.imageUrl,
        req.body.imagePublicId
    )
        .then(response => {
            responseHandler(res, "Team Memeber Added Successfully");
        })
        .catch(err => {
            errorHandler(res, err);
        });
});

router.delete("/team", (req, res, next) => {
    databaseHandler.deleteTeam(req.body.id)
        .then(response => {
            responseHandler(res, "Team Member Deleted Successfully");
        })
        .catch(err => {
            errorHandler(res, err);
        });

});

router.post("/notices", (req, res, next) => {
    databaseHandler.addNotice(
        req.body.title, 
        req.body.content,
        req.body.name,
        req.body.designation,
        req.body.date,
        req.file.fileLink,
        req.body.filePublicId
    )
        .then(response => {
            // Use Mailgun and Twilio
            responseHandler(res, "Notice Added Successfully");
        })
        .catch(err => {
            errorHandler(res, err);
        });
});

router.delete("/notices", (req, res, next) => {

    databaseHandler.deleteNotice(req.body.id)
        .then(response => {
            responseHandler(res, "Notice Deleted Successfully");
        })
        .catch(err => {
            errorHandler(res, err);
        });

});

router.post("/contacts", (req, res, next) => {

    databaseHandler.addContact(
        req.body.name,
        req.body.phone,
        req.body.email
    )
        .then(response => {
            responseHandler(res, "Contact Added Successfully");
        })
        .catch(err => {
            errorHandler(res, err);
        });
});

router.delete("/contacts", (req, res, next) => {
    databaseHandler.deleteContact(req.params.id)
        .then(response => {
            responseHandler(res, "Contact Deleted Successfully");
        })
        .catch(err => {
            errorHandler(res, err);
        });;
});

module.exports = {
    router
}