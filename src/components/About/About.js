import React, { Component } from "react";
import "./About.css";
import Item from '../Item';
import NavBar from '../NavBar';
const myBackground = 'Problem Solver at heart! Web development, Blockchain and Deep Learning enthusiast!';
const myName = 'Alex Lizarraga'
class Home extends Component {
	render() {
		return (
			<section className="About section parallax">
				<NavBar />
				<header>
					<h1>{myName}</h1>
				</header>
				< Item description={myBackground} />
			</section>
		);
	}
}

export default Home;
