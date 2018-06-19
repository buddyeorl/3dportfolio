import React, { Component } from "react";
import "./Item.css";

class Item extends Component {

	constructor(props) {
		super(props);
		this.state = { isToggleOn: true, moveMeRight: 0, moveMeUp: 0, width: 0, height: 0, mouseX: 0, mouseY: 0 };

		// This binding is necessary to make `this` work in the callback
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.handleMouseLeave = this.handleMouseLeave.bind(this);
	}

	handleClick(e) {
		let offsetTop = this.instance.getBoundingClientRect().top;
		let offsetLeft = this.instance.getBoundingClientRect().left;
		let changeX = (e.pageX - offsetLeft);
		let changeY = (e.pageY - offsetTop);
		let eleWidth = this.instance.getBoundingClientRect().width;
		let eleHeight = this.instance.getBoundingClientRect().height;
		let halfElementWidth = eleWidth / 2;
		changeX = (changeX - halfElementWidth) / 40;
		let halfElementHeight = eleHeight / 2;
		changeY = (changeY - halfElementHeight) / 40;
		this.setState(prevState => ({
			moveMeRight: this.state.moveMeRight + changeX,
			moveMeUp: this.state.moveMeUp + changeY
		}));
		console.log("X " + e.pageX);
		console.log("Y " + e.pageY);
		console.log("ClientX " + this.state.width);
		console.log("ClientY " + this.state.height);
		console.log("OffsetTop " + offsetTop);
		console.log("OffsetLeft " + offsetLeft);
		console.log("Width " + this.instance.getBoundingClientRect().width);
	}

	handleMouseLeave(e) {
		this.setState(prevState => ({
			moveMeRight: 0,
			moveMeUp: 0
		}));
		console.log("X " + e.pageX);
		console.log("Y " + e.pageY);
	}
	componentDidMount() {
		this.updateWindowDimensions();
		window.addEventListener('resize', this.updateWindowDimensions);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateWindowDimensions);
	}

	updateWindowDimensions() {
		this.setState({ width: window.innerWidth, height: window.innerHeight });
	}
	render(props) {
		return (
			<div className="portfolioItem" onMouseMove={this.handleClick} onMouseLeave={this.handleMouseLeave}>
				<p >{this.props.name} </p>
				<p ref={(el) => this.instance = el} Style={"transform: translate(" + this.state.moveMeRight + "px," + this.state.moveMeUp + "px);"}>{this.props.description}</p>
				<button >
					{/* {this.state.isToggleOn ? 'ON' : 'OFF'} */}
				</button>
			</div>
		);
	}
}

export default Item;
