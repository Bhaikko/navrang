const Sequelize = require("sequelize");
const { DATABASE_USERNAME, DATABASE_NAME, DATABASE_PASSWORD } = require("./../credentials");

const database = new Sequelize(DATABASE_NAME, DATABASE_USERNAME, DATABASE_PASSWORD, {
    host: "localhost",
    dialect: "mysql",
    logging: false 
});


const Admins = database.define("admins", {
    username: {
        type: Sequelize.STRING,
        unique: {
            args: true,
            msg: "Username Already Exists"
        },
        allowNull: {
            args: false,
            msg: "Required"
        }
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

const Issues = database.define("issues", {
    senderName: {
        type: Sequelize.STRING,
        allowNull: false 
    },
    senderEmail: {
        type: Sequelize.STRING,
        allowNull: false 
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    date: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    viewed: {
        type: Sequelize.BOOLEAN,
        defaultValue: false 
    }
});

const Events = database.define("events", {
    lastDate: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    registrationLink: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    imageLink: {
        type: Sequelize.STRING,
        allowNull: false
    },
    info: {
        type: Sequelize.TEXT,
        allowNull: false 
    } 
});

const Achievements = database.define("achievements", {
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    subtitle: {
        type: Sequelize.STRING,
        allowNull: false 
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    date: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    imageUrl: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

const Team = database.define("team", {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    designation: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    about: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    contactLink: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    imageLink: {
        type: Sequelize.STRING,
        allowNull: false 
    }
});

const Notices = database.define("notices", {
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    designation: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    date: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    fileLink: {
        type: Sequelize.STRING,
    },
});index

const Contacts = database.define("contacts", {
    name: {
        type: Sequelize.STRING,
        allowNull: false 
    },
    phone: {
        type: Sequelize.STRING,
    },
    email: {
        type: Sequelize.STRING 
    }
});

module.exports = {
    database,
    Admins,
    Issues,
    Achievements,
    Events,
    Team,
    Notices,
    Contacts
}