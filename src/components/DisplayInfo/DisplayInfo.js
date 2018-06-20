import React, { Component } from "react";
import "./DisplayInfo.css";
const titles = ["JS", "MongoDB", "Deep Learning", "React", "Full Stack", "Fun", "Full Stack App", "Blockchain", "Jupyter Books"];
const descriptions = "";

class DisplayInfo extends Component {
	constructor(props) {
		super(props);
		this.state = { displayInfoResize: 49.5 };

		// This binding is necessary to make `this` work in the callback
		this.handleClick = this.handleClick.bind(this);
		this.handleMouseLeave = this.handleMouseLeave.bind(this);
	}

	handleClick(e) {
		// console.log(e.target.style.width); //check target width
		console.log(this);
		e.target.style.width = "90vw";
		this._reactInternalFiber.child.child.stateNode.nextSibling.style.width = "8vw";
		// this.setState({ displayInfoResize: 99 });
	}
	handleMouseLeave(e) {
		e.target.style.width = "49.5vw";
		this._reactInternalFiber.child.child.stateNode.nextSibling.style.width = "49.5vw";
		// this.setState({ displayInfoResize: 49.5 });
	}
	render(props) {
		return (
			<section className="displayInfoContainer b-0 m-0 p-2" >
				{
					titles.map((title, index) =>
						<div className={"displayInfoCard mx-0 p-0"} Style={"width:" + this.state.displayInfoResize + "vw;"} onMouseOver={this.handleClick} onMouseOut={this.handleMouseLeave}>
							<p>{title}</p>
							<p>A small project using JS</p>
						</div>
					)
				}
			</section>
		);
	}
}

export default DisplayInfo;
