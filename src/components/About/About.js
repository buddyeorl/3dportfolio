import React, { Component } from "react";
import "./About.css";
import Item from '../Item';
import NavBar from '../NavBar';
import Transition3d from '../Transition3d';


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
			<section className="About w-100" onMouseMove={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
				<div className="w-100 h-25">
					<NavBar />
				</div>
				<div className="w-100 h-50">
					<div className="w-25 h-100 m-0 p-0" Style={"float:left;"} >
					</div>
					<div className="w-50 h-100 m-0 p-0" Style={"float:left;"}>
						<Transition3d x={this.state.xAbout} y={this.state.yAbout} follow={true} rotateAngle={5} delay={5000} message={
							<header>
								<h1 className="myName">{this.props.myName}</h1>
							</header>
						}
						/>
					</div>
					<div className="w-25 h-100 m-0 p-0" Style={"float:left;"}>
					</div>
				</div>
				<div className="w-25 h-100" Style={"float:left;"}>
					< Item description={this.props.myBackground} x={this.state.xAbout} y={this.state.yAbout} />
				</div>
				<div className="w-50 h-100" Style={"float:left;"}>
					<div class="pulse"><h1>&darr;&darr;&darr;Scroll Down!!&darr;&darr;&darr;</h1></div>

				</div>
				<div className="w-25 h-100" Style={"float:left;"}>
				</div>
			</section>
		);
	}
}

export default Home;
