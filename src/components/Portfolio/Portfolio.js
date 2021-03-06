import React, { Component } from "react";
import "./Portfolio.css";
import LeftMessage from '../LeftMessage';
import TransitionUp from '../TransitionUp';
import TransitionRight from '../TransitionRight';
import Transition3d from '../Transition3d';
import FollowingTag from '../FollowingTag';

class Portfolio extends Component {
	// THESE LINES ARE NECESARY IF I NEED TO USE THE TRANSITION3D ELEMENT, THIS LINES WILL SEND THE RELATIVE MOUSE CORDINATES
	// TO THE ELEMENT TRANSITION3D TO UPDATE CURRENT POSITION / ANIMATION
	constructor(props) {
		super(props);
		this.state = { xAbout: 0, yAbout: 0 };
		// This binding is necessary to make `this` work in the callback
		this.handleMouseEnter = this.handleMouseEnter.bind(this);
		this.handleMouseLeave = this.handleMouseLeave.bind(this);
		this.changeTheParentBackground = this.changeTheParentBackground.bind(this);
	}
	handleMouseEnter(e) {
		e.persist();
		// console.log(e);
		// console.log("X " + e.clientX); 
		// console.log("Y " + e.clientY);
		this.setState(prevState => ({
			xAbout: e.clientX, // sending the client height
			yAbout: e.clientY // sending the client width
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
	// ======================================END============================================ //

	changeTheParentBackground() {
		let bottomPortfolio = this.instance.getBoundingClientRect().bottom;
		let topClient = this.instance.getBoundingClientRect().y;
		let difference = bottomPortfolio - topClient;
		// console.log(bottomPortfolio);
		// console.log(topClient)
		if (difference > 0 && bottomPortfolio < difference && bottomPortfolio > 0) {
			this.props.receiveBackground(this.props.portfolioIndex);
		}
	}
	componentDidMount() {
		// console.log(this.props.mySkills);
		window.addEventListener('scroll', this.changeTheParentBackground);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.changeTheParentBackground);
	}
	render(props) {
		return (
			// onMouseMove and onMouseLeave "listeners" added to the parent div, IMPORTANT: transition3d need the listeners to work.
			// x={this.state.xAbout} y={this.state.yAbout}  need to be sent to the element transition3d to work
			<div ref={(el) => this.instance = el} className={"portfolio portfolioBackground" + this.props.backgroundColor + " w-100 p-0 b-0"} onMouseMove={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
				<div className="divPortfolio w-25 h-100">
					<div className="divPortfolio w-100 h-50">
						<Transition3d x={this.state.xAbout} y={this.state.yAbout} follow={false} rotateAngle={7.5} message={
							<LeftMessage number={this.props.number} />
						}
						/>
					</div>
					{/* Side Div where tracker will be */}
					<div className="divPortfolio temporal w-100 h-50">
						{/* I'm working on a website activity tracker, will leave this text as a reminder. if you think i should remove it, please send me an email or message and I'll reconsider it. */}
					</div>
				</div>
				<div className="divPortfolio w-50 h-100">
					<div className="divPortfolio w-100 h-25 p-5">
						<h1>
							{/* This will hold the type of the project */}
							{this.props.projectType}
						</h1>
					</div>
					<div className="divPortfolio w-50 h-25 p-5">
						{/* "this will hold a brief description of the website." */}
						<TransitionUp message={
							<div>
								<h2 className="mobileColorTitle">
									{this.props.projectName}
								</h2>
								<p>
									{this.props.projectDesc}
								</p>
							</div>
						} />
					</div>
					<div className="divPortfolio w-50 h-25">
						{/* this will hold an image of the site. and link if clicked. */}
						<Transition3d x={this.state.xAbout} y={this.state.yAbout} rotateAngle={7.5} message={
							<a href={this.props.demoUrl} target="_blank">
								<TransitionRight message={<img src={this.props.imgProject} alt="Italian Trulli" className="displayInfoDiv w-100 h-100" />
								} />
							</a>
						}
						/>

					</div>
					<div className="divPortfolio w-50 h-25">
						{/* this will hold another picture. and link. maybe. */}

					</div>
					<div className="divPortfolio w-50 h-25 p-5">
						<TransitionUp message=
							{
								<div>
									<h2 className="mobileColorTech">
										Technologies Used in this project:
									</h2>
									<ul>
										{this.props.mySkills.map((mySkill, index) =>
											<li key={index + "mySkill"}>{mySkill}</li>
										)
										}
									</ul>
								</div>
							}
						/>
					</div>
					<div className="divPortfolio w-100 h-25 p-5 m-5 b-5">
						{/* this will hold quote describing the project */}
						<h2 className="mobileColorLink"><a href={this.props.demoUrl} target="_blank">Status: In progress, Live Demo. Click Here</a></h2>
					</div>
				</div>
				<div className="divPortfolio w-25 h-100">
					{/* big text in here or big picture or landing pages */}
					<FollowingTag message={this.props.projectName} />
				</div>
			</div >
		);
	}
}

export default Portfolio;
