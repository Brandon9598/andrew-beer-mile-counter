import "./Stats.css";
import NumberCounter from "number-counter";

function Stats() {
	return (
		<div className="stats">
			<h1>Here are my stats so far for the year.</h1>
			<h2>Total Beers Drank</h2>
			<NumberCounter end={100} />
			<h2>Total Miles Ran</h2>
			<NumberCounter end={100} />
		</div>
	);
}

export default Stats;
