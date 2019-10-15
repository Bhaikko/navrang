const { Achievements, Issues, Events, Team, Notices, Contacts } = require("./database");

const { databaseParser } = require("./utility");

const getTeamByDesignation = (designation) => {
    return Team.findOne({
        where: {
            designation
        }
    })
        .then(member => member)
        .catch(err => err);
}

const getFrontPageData = () => {
    return Promise.all([
        getTeamByDesignation("President"),
        getTeamByDesignation("Vice President"),
        getTeamByDesignation("Counsellor"),
        getAchievements(3)
    ])
        .then(response => response)
        .catch(console.log);
}

const getAchievements = (limit) => {
    return Achievements.findAll({
        order: [
            ["title", "ASC"]
        ],
        limit: limit ? limit : 1000
    })
        .then(achievements => databaseParser(achievements))
        .catch(err => { throw new Error(err) });
}

const getAchievement = id => {

    return Achievements.findOne({
        where: {
            id
        }
    })
        .then(achievement => achievement)
        .catch(console.log);
}

const addAchievment = (title, subtitle, content, date, imageUrl) => {
    return Achievements.create({
        title,
        subtitle,
        content,
        date,
        imageUrl 
    })
        .then(achievement => achievement)
        .catch(err => { throw new Error(err) });
}

const deleteAchievement = (id) => {
    return Achievements.destroy({
        where: {
            id
        }
    })
        .then(response => response)
        .catch(err => { throw new Error(err) });
}

const getIssues = () => {
    return Issues.findAll({
        order: [
            ["senderName", "ASC"]
        ]
    })
        .then(issues => databaseParser(issues))
        .catch(err => { throw new Error(err) });
}


const addIssue = (senderName, senderEmail, content, date) => {
    return Issues.create({
        senderName,
        senderEmail,
        content,
        date  
    })
        .then(issue => issue)
        .catch(err => { throw new Error(err) });
}

const deleteIssue = (id) => {
    return Issues.destroy({
        where: {
            id 
        }
    })
        .then(response => response)
        .catch(err => { throw new Error(err) });
}

const getEvent = id => {
    return Events.findOne({
        where: {
            id
        }
    })
        .then(event => event)
        .catch(console.log);
}


const getEvents = () => {
    return Events.findAll({
        order: [
            ["name", "ASC"]
        ]
    })
        .then(events => databaseParser(events))
        .catch(err => { throw new Error(err) });
}

const addEvent = (name, lastDate, registrationLink, imageLink, info) => {
    return Events.create({
        name,
        lastDate,
        registrationLink,
        imageLink,
        info
    })
        .then(event => event)
        .catch(err => { throw new Error(err) });
}

const deleteEvent = (id) => {
    return Events.destroy({
        where: {
            id 
        }
    })
        .then(response => response)
        .catch(err => { throw new Error(err) });
}

const getTeamMember = id => {
    return Team.findOne({
        where: {
            id
        }
    })
        .then(team => team)
        .catch(console.log);
}


const getTeam = () => {
    return Team.findAll()
        .then(team => databaseParser(team))
        .catch(err => { throw new Error(err) });
}

const addTeam = (name, designation, about, contactLink, imageLink) => {
    return Team.create({
        name, 
        designation,
        about, 
        contactLink,
        imageLink
    })
        .then(team => team)
        .catch(err => { throw new Error(err) });
}

const deleteTeam = (id) => {
    return Team.destroy({
        where: {
            id 
        }
    })
        .then(response => response)
        .catch(err => { throw new Error(err) });
}

const getNotice = id => {

    return Notices.findOne({
        where: {
            id
        }
    })
        .then(notice => notice)
        .catch(console.log);
}


const getNotices = () => {
    return Notices.findAll({
        order: [
            ["title", "ASC"]
        ]
    })
        .then(notices => databaseParser(notices))
        .catch(err => { throw new Error(err) });
}

const addNotice = (title, content, name, designation, date, fileLink) => {
    return Notices.create({
        title,
        content,
        name,
        designation,
        date,
        fileLink 
    })
        .then(notice => notice)
        .catch(err => { throw new Error(err) });
}

const deleteNotice = (id) => {
    return Notices.destroy({
        where: {
            id 
        }
    })
        .then(response => response)
        .catch(err => { throw new Error(err) });
}

const getContacts = () => {
    return Contacts.findAll({
        order: [
            ["name", "ASC"]
        ]
    })
        .then(contacts => databaseParser(contacts))
        .catch(err => { throw new Error(err) });
}

const addContact = (name, phone, email) => {
    return Contacts.create({
        name,
        phone,
        email  
    })
        .then(contacts => contacts)
        .catch(err => { throw new Error(err) });
}

const deleteContact = (id) => {
    return Contacts.destroy({
        where: {
            id 
        }
    })
        .then(response => response)
        .catch(err => { throw new Error(err) });
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