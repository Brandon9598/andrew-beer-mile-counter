import * as functions from "firebase-functions";
import * as express from "express";
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

// /* ----------- TRIGGERS ----------- */
const { sendTwilioMessages } = require("./triggers/stats");
exports.sendTwilioMessages = sendTwilioMessages;

// /* ----------- HTTP FUNCTIONS ----------- */
const { getStats, setStats } = require("./handlers/stats");
const { sendTwilioMessage } = require("./handlers/twilio");
const { addSubscriber } = require("./handlers/contact-info");

app.get("/stats", getStats);
app.post("/stats", setStats);
app.post("/sendTwilioMessage", sendTwilioMessage);
app.post("/subscribe", addSubscriber);

exports.app = functions.https.onRequest(app);
