import React, { Component } from "react";
import "./About.css";
import Item from '../Item';
import NavBar from '../NavBar';
import Transition3d from '../Transition3d';
import Cube3d from '../Cube3d';


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
		// console.log("X " + e.clientX);
		// console.log("Y " + e.clientX);
		this.setState(prevState => ({
			xAbout: e.clientX,
			yAbout: e.clientY
		}));
	}
	handleMouseLeave(e) {
		e.persist();
		this.setState(prevState => ({
			xAbout: 0,
			yAbout: 0
		}));
		// console.log("X " + e.pageX);
		// console.log("Y " + e.pageY);
	}
	render(props) {
		return (
			<section className="About" onMouseMove={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
				<NavBar />
				<Transition3d x={this.state.xAbout} y={this.state.yAbout} follow={true} rotateAngle={15} delay={10000} message={
					<header>
						<h1 className="myName">{this.props.myName}</h1>
					</header>
				}
				/>
				< Item description={this.props.myBackground} x={this.state.xAbout} y={this.state.yAbout} />
				< Item description={this.props.myBackground} x={this.state.xAbout} y={this.state.yAbout} />
				< Item description={this.props.myBackground} x={this.state.xAbout} y={this.state.yAbout} />
			</section>
		);
	}
}

export default Home;
