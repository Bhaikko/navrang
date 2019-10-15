const { Achievements, Issues, Events, Team, Notices, Contacts } = require("./database");

const { databaseParser } = require("./utility");

const getAchievements = () => {
    return Achievements.findAll({
        order: [
            ["date", "DESC"]
        ]
    })
        .then(achievements => databaseParser(achievements))
        .catch(err => { throw new Error(err) });
}

const getAchievement = id => {
    console.log(id);
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
            ["date", "DESC"]
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
        date,
        viewed  
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
            ["lastDate", "DESC"]
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
            ["date", "DESC"]
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
    deleteTeam
}