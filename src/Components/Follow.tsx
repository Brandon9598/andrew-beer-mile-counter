import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input/input";
import { useEffect, useState } from "react";
import { E164Number } from "libphonenumber-js/min";
import "./Follow.css";
import { Button } from "@material-ui/core";
import axios from "axios";
import { config } from "../config";

function Follow() {
	const [phoneNum, setPhoneNum] = useState<E164Number | undefined>();
	const [showMessage, setShowMessage] = useState(false);
	const [message, setMessage] = useState("");

	useEffect(() => {
		console.log(phoneNum?.length);
	}, [phoneNum]);

	const join = () => {
		axios
			.post(`${config.firebase_url}/subscribe`, { phoneNumber: phoneNum })
			.then(() => {
				setMessage("Congrats! You successfully joined");
			})
			.catch((err) => {
				setMessage(
					"Err! Phone number not added. Please refresh the page and try again"
				);
			})
			.finally(() => {
				setShowMessage(true);
				setTimeout(() => {
					setShowMessage(false);
				}, 4000);
			});
	};

	return (
		<div className="follow">
			<h1>Want to stay up to date with my beer and running adventures?</h1>
			<h2>Join my text messaging list</h2>
			<PhoneInput
				placeholder="Enter phone number"
				value={phoneNum}
				country="US"
				onChange={setPhoneNum}
			/>
			<Button
				variant="outlined"
				color="primary"
				disabled={phoneNum?.length !== 12}
				onClick={join}
			>
				Sign up.
			</Button>

			{showMessage && (
				<>
					<h3>{message}</h3>
				</>
			)}
		</div>
	);
}

export default Follow;
