import { db } from "../config/firebase";

const addSubscriber = (req: any, res: any) => {
	console.log("Running new subscriber");

	let phoneNumber = req.body.phoneNumber;
	phoneNumber = parseInt(
		phoneNumber
			.replaceAll("(", "")
			.replaceAll(")", "")
			.replaceAll(" ", "")
			.replaceAll("-", "")
	);

	return db
		.doc(`contact-info/${phoneNumber}`)
		.create({ phoneNumber: `${phoneNumber}` })
		.then(() => {
			return res.status(200).json({ message: "success" });
		})
		.catch((err) => {
			return res.status(500).json({ message: "error" });
		});
};

export { addSubscriber };
