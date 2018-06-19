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

	handleClick() {
		let offsetTop = this.instance.getBoundingClientRect().top;
		let offsetLeft = this.instance.getBoundingClientRect().left;
		let changeX = (this.props.x - offsetLeft);
		let changeY = (this.props.y - offsetTop);
		let eleWidth = this.instance.getBoundingClientRect().width;
		let eleHeight = this.instance.getBoundingClientRect().height;
		let halfElementWidth = eleWidth / 2;
		changeX = (changeX - halfElementWidth) / 4000;
		let halfElementHeight = eleHeight / 2;
		changeY = (changeY - halfElementHeight) / 4000;
		this.setState(prevState => ({
			moveMeRight: this.state.moveMeRight + changeX,
			moveMeUp: this.state.moveMeUp + changeY
		}));
		console.log("X " + this.props.x);
		console.log("Y " + this.props.y);
		console.log("ClientX " + this.state.width);
		console.log("ClientY " + this.state.height);
		console.log("OffsetTop " + offsetTop);
		console.log("OffsetLeft " + offsetLeft);
		console.log("Width " + this.instance.getBoundingClientRect().width);
		console.log(this.instance.offsetParent);
		console.log(this);
	}

	handleMouseLeave() {
		this.setState(prevState => ({
			moveMeRight: 0,
			moveMeUp: 0
		}));
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
	componentWillReceiveProps() {
		this.handleClick();
		//reset position in case of hoverOut
		if (this.props.x === 0 && this.props.y === 0) {
			this.handleMouseLeave();
		}
	}
	render(props) {
		return (
			<div ref={(el) => this.instance = el} Style={"transform: translate(" + this.state.moveMeRight + "px," + this.state.moveMeUp + "px);"} className="portfolioItem" onMouseMove={this.handleClick}>
				<p >{this.props.name} {this.props.x} {this.props.y}</p>
				<p >{this.props.description}</p>
				<button >
					{/* {this.state.isToggleOn ? 'ON' : 'OFF'} */}
				</button>
			</div>
		);
	}
}

export default Item;
