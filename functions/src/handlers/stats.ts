import { firestore } from "firebase-admin";

exports.getStats = (req: any, res: any) => {
	return firestore()
		.doc(`stats/andrew-eck`)
		.get()
		.then((data: firestore.DocumentSnapshot) => {
			console.log(data.data());
			return data.data();
		});
};
