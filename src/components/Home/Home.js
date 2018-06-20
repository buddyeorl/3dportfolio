import React, { Component } from "react";
import "./Home.css";
import DisplayItems from '../DisplayItems';

class Home extends Component {
	render() {
		return (
			<div>
				<section className="AppHome">
					<header>
						<h1 className="portfolioTitle"></h1>
						<DisplayItems />
					</header>
				</section>
			</div>
		);
	}
}

export default Home;
