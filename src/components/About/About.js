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
			<div>
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
						<div className="pulse"> <img src="./assets/img/utils/scrolldown.png" alt="Scroll Down" className="scrollDownImage" /><img src="./assets/img/utils/scrolldown.png" alt="Scroll Down" className="scrollDownImage" /><img src="./assets/img/utils/scrolldown.png" alt="Scroll Down" className="scrollDownImage" /><img src="./assets/img/utils/scrolldown.png" alt="Scroll Down" className="scrollDownImage" /></div>

					</div>
					<div className="w-25 h-100" Style={"float:left;"}>
					</div>
				</section>

				{/* MOBILE HOME PAGE STARTS BELOW */}
				<div className="mobileHome">
					<div className="pos-f-t">
						<div className="collapse" id="navbarToggleExternalContent">
							<div className="bg-dark p-4">
								<h4 className="text-white">{this.props.myName}</h4>
								<span className="text-muted">Problem Solver!</span>
								<ul className="navbar-nav mr-auto mt-2 mt-lg-0">
									<li className="nav-item active">
										<a className="nav-link text-white" href="#homeStart">Home <span className="sr-only">(current)</span></a>
									</li>
									<li className="nav-item">
										<a className="nav-link text-white" href="#portfolioStart">Portfolio</a>
									</li>
									<li className="nav-item">
										<a className="nav-link text-white" href="#contactStart">Contact</a>
									</li>
								</ul>
							</div>
						</div>
						<nav className="navbar navbar-dark bg-dark">
							<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
								<span className="navbar-toggler-icon"></span>
							</button>
						</nav>
					</div>
					<div className="backgroundText text-white"><h1>{this.props.myName}</h1></div>
					<div className="backgroundText"><h1>{this.props.myBackground}</h1></div>
					<div className="pulse"><img src="./assets/img/utils/scrolldown.png" alt="Scroll Down" className="scrollDownImage" /></div>
				</div>
			</div>
		);
	}
}

export default Home;
