import { useState, useEffect } from "react";
import NumberCounter from "number-counter";
import "./Stats.css";
import { config } from "../config";

const axios = require("axios");

function Stats() {
	const [beers, setBeers] = useState(0);
	const [miles, setMiles] = useState(0);
	const [diff, setDiff] = useState(0);
	const [checkedDiff, setCheckedDiff] = useState(false);

	useEffect(() => {
		axios.get(`${config.firebase_url}/stats`).then((resp) => {
			setMiles(resp.data.miles);
			setBeers(resp.data.beers);
		});
	}, []);

	useEffect(() => {
		if (beers > 0 && miles > 0) {
			setCheckedDiff(true);
			setDiff(beers - miles);
			console.log(beers - miles);
		}
	}, [beers, miles]);

	return (
		<div className="stats">
			<h1>Here are my stats so far for the year.</h1>
			<h2>Total Beers Drank</h2>
			{beers && <NumberCounter end={beers} delay={2.5} />}
			<h2>Total Miles Ran</h2>
			{miles && <NumberCounter end={miles} delay={2.5} />}
			<h2>
				{diff < 0
					? "Number of beers I can drink guilt free"
					: "Total Miles I Need To Run"}
			</h2>
			{checkedDiff && <NumberCounter end={diff} />}
		</div>
	);
}

export default Stats;
