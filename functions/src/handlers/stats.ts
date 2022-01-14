import { db } from "../config/firebase";

const getStats = (req: any, res: any) => {
	console.log("Running get stats");
	return db
		.doc("stats/andrew-eck")
		.get()
		.then((data) => {
			console.log(data.data());
			return res.status(200).send(data.data());
		});
};

const setStats = (req: any, res: any) => {
	console.log("Running get stats");
	const miles: number = req.body.miles;
	const beers: number = req.body.beers;
	return db
		.doc("stats/andrew-eck")
		.update({ miles, beers })
		.then((resp) => {
			console.log("Successfully set data", resp);
		})
		.catch((err) => {
			console.error(err);
		});
};

export { getStats, setStats };
