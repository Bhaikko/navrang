const { 
    CLOUDINARY_API_KEY, 
    CLOUDINARY_API_SECRET, 
    CLOUDINARY_CLOUD_NAME 
} = require("./../environments");

const express = require("express");
const multer = require("multer");
const fs = require('fs');
const cloudinary = require('cloudinary').v2;

const databaseHandler = require("../database"); 

const router = express.Router();
// const client = require("twilio")(TWILIO_ACC_SID, TWILIO_AUTH_TOKEN);
// const mailgun = require("mailgun-js");
// const mg = mailgun({apiKey: MAIL_GUN_API_KEY, domain: MAIL_GUN_DOMAIN});

const upload = multer({ dest: './uploads' });

cloudinary.config({
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET,
    cloud_name: CLOUDINARY_CLOUD_NAME
})

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
                contacts: response
            });
        })
        .catch(err => {
            errorHandler(res, err);
        });
});

router.post("/achievements", upload.single("files"), (req, res, next) => {
    const filename = __dirname + '/../uploads/' + req.file.filename;

    cloudinary.uploader.upload(filename)
        .then(result => {
            databaseHandler.addAchievment(
                req.body.title, 
                req.body.subtitle,
                req.body.content,
                req.body.date,
                result.url,
                result.public_id
            )
                .then(response => {
                    responseHandler(res, "Achievement Added Successfully");
                })
        })
        .catch(err => {
            errorHandler(res, err);
        });
});

router.delete("/achievements", (req, res, next) => {
    cloudinary.uploader.destroy(req.body.public_id)
        .then(() => {
            databaseHandler.deleteAchievement(req.body.id)
                .then(response => {
                    responseHandler(res, "Achievement Deleted Successfully");
                });
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

router.post("/events", upload.single("files"), (req, res, next) => {
    const filename = __dirname + '/../uploads/' + req.file.filename;

    cloudinary.uploader.upload(filename)
        .then(result => {
            databaseHandler.addEvent(
                req.body.name,
                req.body.lastDate,
                req.body.registrationLink,
                result.url,
                req.body.info, 
                result.public_id
            )
                .then(response => {
                    responseHandler(res, "Event Added Successfully");
                });
        })
        .catch(err => {
            errorHandler(res, err);
        });

});

router.delete("/events", (req, res, next) => {
    cloudinary.uploader.destroy(req.body.public_id)
        .then(() => {
            databaseHandler.deleteEvent(req.body.id)
                .then(response => {
                    responseHandler(res, "Event Deleted Successfully.");
                });
        })
        .catch(err => {
            errorHandler(res, err);
        });

});

router.post("/team", upload.single("files"), (req, res, next) => {

    const filename = __dirname + '/../uploads/' + req.file.filename;

    cloudinary.uploader.upload(filename)
        .then(result => {
            databaseHandler.addTeam(
                req.body.name,
                req.body.designation,
                req.body.about,
                req.body.contactLink,
                result.url,
                result.public_id
            )
                .then(response => {
                    responseHandler(res, "Team Memeber Added Successfully");
                })
        })
        .catch(err => {
            errorHandler(res, err);
        });
});

router.delete("/team", (req, res, next) => {
    cloudinary.uploader.destroy(req.body.public_id)
        .then(() => {
            databaseHandler.deleteTeam(req.body.id)
                .then(response => {
                    responseHandler(res, "Team Member Deleted Successfully");
                })
        })
        .catch(err => {
            errorHandler(res, err);
        });

});

router.post("/notices", upload.single("files"), (req, res, next) => {
    const filename = __dirname + '/../uploads/' + req.file.filename;

    cloudinary.uploader.upload(filename)
        .then(result => {
            databaseHandler.addNotice(
                req.body.title, 
                req.body.content,
                req.body.name,
                req.body.designation,
                req.body.date,
                result.url,
                result.public_id
            )
                .then(response => {
                    // Use Mailgun and Twilio
                    responseHandler(res, "Notice Added Successfully");
                })
        })
        .catch(err => {
            errorHandler(res, err);
        });
});

router.delete("/notices", (req, res, next) => {
    cloudinary.uploader.destroy(req.body.public_id)
        .then(() => {
            databaseHandler.deleteNotice(req.body.id)
                .then(response => {
                    responseHandler(res, "Notice Deleted Successfully");
                });
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