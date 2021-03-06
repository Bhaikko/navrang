const { 
    TOKEN_SECRET_KEY ,
    CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET,
    CLOUDINARY_CLOUD_NAME,
    EMAIL,
    PASSWORD
} = require('./credentials');

const PORT = 4000;
module.exports.PORT = PORT;

module.exports.SERVER_URL = `http://127.0.0.1:${PORT}/`;

module.exports.TOKEN_SECRET_KEY = TOKEN_SECRET_KEY;

module.exports.CLOUDINARY_CLOUD_NAME = CLOUDINARY_CLOUD_NAME;
module.exports.CLOUDINARY_API_KEY = CLOUDINARY_API_KEY;
module.exports.CLOUDINARY_API_SECRET = CLOUDINARY_API_SECRET;

module.exports.EMAIL = EMAIL;
module.exports.PASSWORD = PASSWORD;
