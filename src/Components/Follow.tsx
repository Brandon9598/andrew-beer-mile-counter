import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input/input";
import { useState } from "react";
import { E164Number } from "libphonenumber-js/min";
import "./Follow.css";
import { Button } from "@material-ui/core";

function Follow() {
	const [phoneNum, setPhoneNum] = useState<E164Number | undefined>();

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
			<Button variant="outlined" color="primary">
				Sign up.
			</Button>
		</div>
	);
}

export default Follow;
