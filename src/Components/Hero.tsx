import "./Hero.css";
import Drinking from "../assets/images/post-beer.jpg";
import Running from "../assets/images/post-run.jpg";

function Hero() {
	return (
		<div className="hero">
			<h1>Hi! I'm Andrew!</h1>
			<h2>
				This year I have committed myself to running a mile for every beer I
				drink.
			</h2>
			<div className="hero-images">
				<div className="hero-image-container">
					<h2>So every time I do this...</h2>
					<img src={Drinking} alt="drinking" />
				</div>
				<div className="hero-image-container">
					<h2>I have to do a lot of this...</h2>
					<img src={Running} alt="running" />
				</div>
			</div>
		</div>
	);
}

export default Hero;
