module.exports = {
    addAdmin,
    getAdmin
} = require("./authHandler");

module.exports = {
    addAchievment,
    addEvent,
    addIssue,
    addNotice,
    addTeam,
    addContact,
    getAchievements,
    getEvents,
    getIssues,
    getNotices,
    getTeam,
    getContacts,
    deleteAchievement,
    deleteContact,
    deleteEvent,
    deleteIssue,
    deleteNotice,
    deleteTeam
} = require("./databaseHandler");

