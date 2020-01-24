const express = require("express");
const cors = require("cors");
const path = require("path");

const { database } = require("./database/database");
const { SERVER_URL, PORT } = require('./environments');

const api = require("./api").router;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/uploads', express.static(__dirname + '/uploads'));
app.use("/api", api);

app.use(express.static(path.join(__dirname, "public", 'build')));
app.use(express.static(path.join(__dirname, "private", 'build')));

app.get('/admin', function(req, res) {
    res.sendFile(path.join(__dirname, "private", 'build', 'index.html'));
});
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, "public", 'build', 'index.html'));
});

database.sync()
    .then(() => {
    console.log("Database Synced");
    app.listen(process.env.PORT || PORT, () => console.log(`Server Up And Running At ${SERVER_URL}`));
});
