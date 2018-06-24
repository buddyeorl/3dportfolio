import React, { Component } from "react";
import "./LeftMessage.css";

class LeftMessage extends Component {
	constructor(props) {
		super(props);
		this.state = { width: 0, height: 0, textClass: "bigSideText" };

		// This binding is necessary to make `this` work in the callback
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
		this.messageAnimation = this.messageAnimation.bind(this);
	}

	messageAnimation() {
		let offsetTop = this.instance.getBoundingClientRect().top;
		let offsetBottom = this.instance.getBoundingClientRect().bottom;
		if (offsetTop < (this.state.height / 3) && offsetBottom > (this.state.height / 5)) {
			if (this.state.textClass === "bigSideText") {
				// console.log("Blue in");
				// console.log(offsetBottom);
				// console.log(this.state.height);
				this.setState({ textClass: "bigSideTextOnViewport" });
			}
		} else {
			if (this.state.textClass === "bigSideTextOnViewport") {
				// console.log("gray in");
				this.setState({ textClass: "bigSideText" });
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
			<div ref={(el) => this.instance = el} className={this.state.textClass}>
				{this.props.number}
			</div>
		);
	}
}

export default LeftMessage;
