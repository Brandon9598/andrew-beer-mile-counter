import React from "react";
import Follow from "../Components/Follow";
import Hero from "../Components/Hero";
import Stats from "../Components/Stats";

function Home() {
	return (
		<div className="home">
			<Hero />
			<Stats />
			<Follow />
		</div>
	);
}

export default Home;
