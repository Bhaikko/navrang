const express = require("express");
const session = require("express-session");
const cors = require("cors");

const { database } = require("./database/database");
const { passport } = require("./passport");
const { COOKIE_SECRET_KEY } = require("./credentials");
const api = require("./api").router;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const sessionMiddleware = session({
    secret: COOKIE_SECRET_KEY,
    resave: false,
    saveUninitialized: true 
});

app.use(sessionMiddleware);
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static("./public"));
app.use("/admin", express.static("./private"));
app.use("/uploads", express.static("./uploads"));

app.use("/api", api);

const PORT = 4000;
database.sync()
    .then(() => {
    console.log("Database Synced");
    app.listen(PORT, () => console.log("Server Up And Running At 127.0.0.1:" + PORT));
});
