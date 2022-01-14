const test = (req: any, res: any) => {
	console.log("Running get stats");
	return res.status(200).json("Test handler works");
};

export { test };
