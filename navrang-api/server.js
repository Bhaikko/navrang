const express = require("express");

const { database } = require("./database/database");
const api = require("./api");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("./public"));
app.use("/admin", express.static("./private"));
app.use("/api", api);

const PORT = 4000;
database.sync()
    .then(() => {
    console.log("Database Synced");
    app.listen(PORT, () => console.log("Server Up And Running At 127.0.0.1:" + PORT))
});
