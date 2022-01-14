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
			<h1>Here are my stats so far for the year</h1>
			<div className="overall-stats">
				<div className="stat">
					<h2>Total Beers Drank</h2>
					<span>{beers && <NumberCounter end={beers} delay={2.5} />}</span>
				</div>
				<div className="stat">
					<h2>Total Miles Ran</h2>
					<span>{miles && <NumberCounter end={miles} delay={2.5} />}</span>
				</div>
			</div>
			<div className="running-stats">
				{diff < 0 ? (
					<>
						<h2>"Number of beers Andrew can drink guilt free"</h2>
						<span>{checkedDiff && <NumberCounter end={diff} />}</span>
					</>
				) : (
					<>
						<h2>Total Miles Andrew Need To Run</h2>
						<span>{checkedDiff && <NumberCounter end={diff * -1} />}</span>
					</>
				)}
			</div>
		</div>
	);
}

export default Stats;
