const functions = require("firebase-functions");
const axios = require("axios");

exports.sendTwilioMessages = functions.firestore
	.document("stats/{statsid}")
	.onUpdate((change: any, context: any) => {
		axios
			.post(
				"https://us-central1-andrew-beer-mile-counter.cloudfunctions.net/app/sendTwilioMessage",
				{ secretKey: "AndrewEck" }
			)
			.then(() => console.log("Succesfully ran trigger"))
			.catch(() => console.error("error with  trigger"));
	});
