import React, { Component } from "react";
import "./DisplayItems.css";
import Item from '../Item';
import { titles } from '../../variables/Variables.js';
class DisplayItems extends Component {
	// THESE LINES ARE NECESARY IF I NEED TO USE THE TRANSITION3D ELEMENT, THIS LINES WILL SEND THE RELATIVE MOUSE CORDINATES
	// TO THE ELEMENT TRANSITION3D TO UPDATE CURRENT POSITION / ANIMATION
	constructor(props) {
		super(props);
		this.state = { xAbout: 0, yAbout: 0 };

		// This binding is necessary to make `this` work in the callback
		this.handleMouseEnter = this.handleMouseEnter.bind(this);
		this.handleMouseLeave = this.handleMouseLeave.bind(this);
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

	render(props) {
		return (
			<div className="displayHolder row justify-content-center p-2 m-0" onMouseMove={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
				{
					titles.map((title, index) =>
						<div key={index + "DivDisplay"} className="col- m-1 p-3">
							<Item name={title} description={title} img={"./assets/img/logos/0" + (index + 1) + ".png"} />
						</div>
					)
				}
			</div>
		);
	}
}

export default DisplayItems;
