import React, { Component } from "react";
import "./Home.css";
import DisplayItems from '../DisplayItems';



class Home extends Component {
	render() {
		return (
			<section className="AppHome section parallax">
				<header>
					<h1>My portfolio</h1>
					<DisplayItems />
				</header>
			</section>
		);
	}
}

export default Home;
