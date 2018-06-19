import React, { Component } from "react";
import "./About.css";
import Item from '../Item';
import NavBar from '../NavBar';
const myBackground = 'Problem Solver at heart! Web development, Blockchain and Deep Learning enthusiast!';
const myName = 'Alex Lizarraga'
class Home extends Component {
	constructor(props) {
		super(props);
		this.state = { xAbout: 0, yAbout: 0 };

		// This binding is necessary to make `this` work in the callback
		this.handleMouseEnter = this.handleMouseEnter.bind(this);
		this.handleMouseLeave = this.handleMouseLeave.bind(this);
	}
	handleMouseEnter(e) {
		e.persist();
		console.log("X " + e.pageX);
		console.log("Y " + e.pageY);
		this.setState(prevState => ({
			xAbout: e.pageX,
			yAbout: e.pageY
		}));
	}
	handleMouseLeave(e) {
		e.persist();
		this.setState(prevState => ({
			xAbout: 0,
			yAbout: 0
		}));
		console.log("X " + e.pageX);
		console.log("Y " + e.pageY);
	}
	render() {
		return (
			<section className="About section parallax" onMouseMove={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
				<NavBar />
				<header>
					<h1>{myName}</h1>
				</header>
				< Item description={myBackground} x={this.state.xAbout} y={this.state.yAbout} />
				< Item description={myBackground} x={this.state.xAbout} y={this.state.yAbout} />
				< Item description={myBackground} x={this.state.xAbout} y={this.state.yAbout} />
			</section>
		);
	}
}

export default Home;
