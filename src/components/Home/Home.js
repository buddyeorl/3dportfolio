import React, { Component } from "react";
import "./Home.css";
import DisplayItems from '../DisplayItems';



class Home extends Component {
	render() {
		return (
			<div>
			<section className="AppHome row">
				<header>
					<h1>My portfolio</h1>
					<DisplayItems />
				</header>
			</section>
			</div>
		);
	}
}

export default Home;
