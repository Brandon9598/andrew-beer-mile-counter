import * as functions from "firebase-functions";
import { db } from "../config/firebase";

const accountSid = functions.config().twilio.account_sid;
const authToken = functions.config().twilio.auth_token;
const client = require("twilio")(accountSid, authToken);

const sendTwilioMessage = async (req: any, res: any) => {
	const secretKey = req.body.secretKey;
	if (secretKey === "AndrewEck") {
		const snapshot = await db.collection("contact-info").get();
		const phoneNumbers = snapshot.docs.map((doc) => doc.id);
		const andrewNumbersSnap = await db
			.collection("stats")
			.doc("andrew-eck")
			.get();
		const andrewNumbers = andrewNumbersSnap.data();

		const messagePromises: any[] = [];
		phoneNumbers.forEach((phoneNumber) => {
			console.log("Sending message to phone number", phoneNumber);
			messagePromises.push(
				client.messages.create({
					body: `Andrew is on the move! Andrew has currently ran ${andrewNumbers?.miles} miles and drank a total of ${andrewNumbers?.beers} beers`,
					from: "+14788873167",
					to: `+${phoneNumber}`,
				})
			);
		});

		Promise.all(messagePromises)
			.then(() => {
				console.log("succesfully sent out all messages");
				return res
					.status(200)
					.json({ message: "All messages sent", phoneNumbers: phoneNumbers });
			})
			.catch((err) => {
				console.log("Error sending out all messages");
				console.error(err);
			});
	} else {
		return res.status(400).json({ message: "Sorry. You can't do this." });
	}
};

export { sendTwilioMessage };
