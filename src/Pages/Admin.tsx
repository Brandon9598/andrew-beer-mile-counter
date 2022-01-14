import { Button, TextField } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import { config } from "../config";
import "./Admin.css";

function Admin() {
	const [beers, setBeers] = useState(0);
	const [miles, setMiles] = useState(0);

	useEffect(() => {
		axios.get(`${config.firebase_url}/stats`).then((resp) => {
			setMiles(resp.data.miles);
			setBeers(resp.data.beers);
		});
	}, []);

	const update = () => {
		axios
			.post(`${config.firebase_url}/stats`, { miles: miles, beers: beers })
			.then((resp) => {
				console.log(resp);
			})
			.catch((err) => {
				console.error(err);
			});
	};

	return (
		<div className="Admin">
			<h1>Admin Section For Andrew</h1>

			<div className="fields">
				<TextField
					type="number"
					label="Miles"
					value={miles}
					variant="outlined"
					onChange={(e) => setMiles(parseInt(e.target.value))}
				/>
				<TextField
					label="Beers"
					value={beers}
					variant="outlined"
					onChange={(e) => setBeers(parseInt(e.target.value))}
				/>
			</div>
			<Button variant="outlined" color="primary" onClick={update}>
				Update
			</Button>
		</div>
	);
}

export default Admin;
