const { Achievements, Issues, Events, Team, Notices } = require("./database");

const { databaseParser } = require("./utility");

const getAchievements = () => {
    return Achievements.findAll({
        order: [
            ["date", "DESC"]
        ]
    })
        .then(achievements => databaseParser(achievements))
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
        .catch(console.log);
}

const getIssues = () => {
    return Issues.findAll({
        order: [
            ["date", "DESC"]
        ]
    })
        .then(issues => databaseParser(issues))
        .catch(console.log);
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
        .catch(console.log);
}

const getEvents = () => {
    return Events.findAll({
        order: [
            ["lastDate", "DESC"]
        ]
    })
        .then(events => databaseParser(events))
        .catch(console.log);
}

const addEvent = (lastDate, registrationLink, imageLink, info) => {
    return Events.create({
        lastDate,
        registrationLink,
        imageLink,
        imageUrl,
        info
    })
        .then(event => event)
        .catch(console.log);
}

const getTeam = () => {
    return Team.findAll()
        .then(team => databaseParser(team))
        .catch(console.log);
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
        .catch(console.log);
}

const getNotices = () => {
    return Notices.findAll({
        order: [
            ["date", "DESC"]
        ]
    })
        .then(notices => databaseParser(notices))
        .catch(console.log);
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
        .catch(console.log);
}

module.exports = {
    addAchievment,
    addEvent,
    addIssue,
    addNotice,
    addTeam,
    getAchievements,
    getEvents,
    getIssues,
    getNotices,
    getTeam
}