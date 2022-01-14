const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

// App
const app = express();
app.use(
  cors({
    origin: true,
  })
);
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

admin.initializeApp();

/* ----------- HTTP FUNCTIONS ----------- */
const {getStats} = require("./handlers/stats")

app.get("stats", getStats);

exports.app = functions.https.onRequest(app);