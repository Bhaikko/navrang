const { Achievements, Issues, Events, Team, Notices, Contacts } = require("./database");

const getTeamByDesignation = (designation) => {
    return Team.findOne({
        where: {
            designation
        }
    });
}

const getFrontPageData = () => {
    return Promise.all([
        getTeamByDesignation("President"),
        getTeamByDesignation("Vice President"),
        getTeamByDesignation("Counsellor"),
        getAchievements(3)
    ]);
}

const getAchievements = (limit) => {
    return Achievements.findAll({
        order: [
            ["title", "ASC"]
        ],
        limit: limit ? limit : 1000
    });
}

const getAchievement = id => {

    return Achievements.findOne({
        where: {
            id
        }
    });
}

const addAchievment = (title, subtitle, content, date, imageUrl, imagePublicId) => {
    return Achievements.create({
        title,
        subtitle,
        content,
        date,
        imageUrl,
        imagePublicId 
    });
}

const deleteAchievement = (id) => {
    return Achievements.destroy({
        where: {
            id
        }
    });
}

const getIssues = () => {
    return Issues.findAll({
        order: [
            ["senderName", "ASC"]
        ]
    });
}


const addIssue = (senderName, senderEmail, content, date) => {
    return Issues.create({
        senderName,
        senderEmail,
        content,
        date  
    });
}

const deleteIssue = (id) => {
    return Issues.destroy({
        where: {
            id 
        }
    });
}

const getEvent = id => {
    return Events.findOne({
        where: {
            id
        }
    });
}


const getEvents = () => {
    return Events.findAll({
        order: [
            ["name", "ASC"]
        ]
    });
}

const addEvent = (name, lastDate, registrationLink, imageLink, info, imagePublicId) => {
    return Events.create({
        name,
        lastDate,
        registrationLink,
        imageLink,
        info,
        imagePublicId
    });
}

const deleteEvent = (id) => {
    return Events.destroy({
        where: {
            id 
        }
    });
}

const getTeamMember = id => {
    return Team.findOne({
        where: {
            id
        }
    });
}


const getTeam = () => {
    return Team.findAll();
}

const addTeam = (name, designation, about, contactLink, imageLink, imagePublicId) => {
    return Team.create({
        name, 
        designation,
        about, 
        contactLink,
        imageLink,
        imagePublicId
    });
}

const deleteTeam = (id) => {
    return Team.destroy({
        where: {
            id 
        }
    });
}

const getNotice = id => {

    return Notices.findOne({
        where: {
            id
        }
    });
}


const getNotices = () => {
    return Notices.findAll({
        order: [
            ["title", "ASC"]
        ]
    });
}

const addNotice = (title, content, name, designation, date, fileLink, filePublicId) => {
    return Notices.create({
        title,
        content,
        name,
        designation,
        date,
        fileLink,
        filePublicId 
    });
}

const deleteNotice = (id) => {
    return Notices.destroy({
        where: {
            id 
        }
    });
}

const getContacts = () => {
    return Contacts.findAll({
        order: [
            ["name", "ASC"]
        ]
    });
}

const addContact = (name, phone, email) => {
    return Contacts.create({
        name,
        phone,
        email  
    });
}

const deleteContact = (id) => {
    return Contacts.destroy({
        where: {
            id 
        }
    });
}


module.exports = {
    addAchievment,
    addEvent,
    addIssue,
    addNotice,
    addTeam,
    addContact,
    getAchievements,
    getAchievement,
    getEvents,
    getEvent,
    getIssues,
    getNotices,
    getNotice,
    getTeam,
    getTeamMember,
    getContacts,
    deleteAchievement,
    deleteContact,
    deleteEvent,
    deleteIssue,
    deleteNotice,
    deleteTeam,
    getFrontPageData
}