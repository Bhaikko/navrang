const { Admins } = require("./index");


const addAdmin = (username, password) => {
    Admins.create({
        username,
        password  
    })
        .then(admin => admin)
        .catch(console.log);   
}

const getAdmin = username => {
    Admins.findOne({
        where: {
            username 
        }
    })
        .then(admin => admin)
        .catch(console.log);
}

module.exports = {
    addAdmin,
    getAdmin
}