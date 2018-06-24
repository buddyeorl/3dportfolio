import React, { Component } from "react";
import "./TransitionRight.css";

class TransitionRight extends Component {
	constructor(props) {
		super(props);
		this.state = { width: 0, height: 0, textClass: "noTransitionText" };

		// This binding is necessary to make `this` work in the callback
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
		this.messageAnimation = this.messageAnimation.bind(this);
	}

	messageAnimation() {
		let offsetTop = this.instance.getBoundingClientRect().top;
		let offsetBottom = this.instance.getBoundingClientRect().bottom;
		// if (offsetTop < (this.state.height) && offsetBottom > (this.state.height / 20)) {
		if (offsetTop < (this.state.height)) {
			if (this.state.textClass === "noTransitionText") {
				// console.log("transition in");
				// console.log(offsetBottom);
				// console.log(this.state.height);
				this.setState({ textClass: "transitionRightTextOnViewport" });
			}
		} else {
			if (this.state.textClass === "transitionRightTextOnViewport") {
				//console.log("transition out");
				this.setState({ textClass: "noTransitionText" });
			}
		}
	}
	componentDidMount() {
		this.updateWindowDimensions();
		window.addEventListener('resize', this.updateWindowDimensions);
		window.addEventListener('scroll', this.messageAnimation);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateWindowDimensions);
		window.removeEventListener('scroll', this.messageAnimation);
	}

	updateWindowDimensions() {
		this.setState({ width: window.innerWidth, height: window.innerHeight });
	}

	render(props) {
		return (
			<div ref={(el) => this.instance = el} className={"w-100 h-100 " + this.state.textClass}>
				{this.props.message}
			</div>
		);
	}
}

export default TransitionRight;
