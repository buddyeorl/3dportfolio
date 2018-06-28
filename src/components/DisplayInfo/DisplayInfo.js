import React, { Component } from "react";
import "./DisplayInfo.css";
import { titles } from '../../variables/Variables.js';

class DisplayInfo extends Component {
	constructor(props) {
		super(props);
		this.state = { displayInfoResize: displayInfoQty };

		// This binding is necessary to make `this` work in the callback
		this.handleClick = this.handleClick.bind(this);
		this.handleMouseLeave = this.handleMouseLeave.bind(this);
	}

	handleClick(index, e) {
		// console.log(e.target.style.width); //check target width
		// console.log("element");
		// console.log(e.target);
		// console.log("element");
		// console.log(index);
		// using 75 / 25 resizing bootstrap utilities changing className of element to 75% of row size on hover
		if (index % 2 === 0) {
			const itemsToUpdate = this.state.displayInfoResize;
			itemsToUpdate[index] = 75;
			itemsToUpdate[index + 1] = 25;
			this.setState({ itemsToUpdate });
		} else {
			const itemsToUpdate = this.state.displayInfoResize;
			itemsToUpdate[index] = 75;
			itemsToUpdate[index - 1] = 25;
			this.setState({ itemsToUpdate });
		}
	}
	handleMouseLeave(index, e) {
		// using 50 / 50 resizing bootstrap utilities changing className of element to 75% of row size on hover
		if (index % 2 === 0) {
			const itemsToUpdate = this.state.displayInfoResize;
			itemsToUpdate[index] = 50;
			itemsToUpdate[index + 1] = 50;
			this.setState({ itemsToUpdate });
		} else {
			const itemsToUpdate = this.state.displayInfoResize;
			itemsToUpdate[index] = 50;
			itemsToUpdate[index - 1] = 50;
			this.setState({ itemsToUpdate });
		}
		// console.log(this);
	}
	render(props) {
		return (
			<section className="displayInfoContainer b-0 p-0 w-75 align-items-center" >
				{
					titles.map((title, index) =>
						<div key={index + "displayInfo"} id={index + "displayInfo"} className={"displayInfoCard w-" + this.state.displayInfoResize[index] + " p-0"} onMouseOver={this.handleClick.bind(this, index)} onMouseOut={this.handleMouseLeave.bind(this, index)} >
							<div className="displayInfoDiv w-100 h-75">
								<img src="desktop.png" className="displayInfoDiv w-100 h-100" />
							</div>
							<div className="displayInfoDiv w-50 h-25"><p>A small project using JS</p></div>
							<div className="displayInfoDiv w-50 h-25"><p>{title}{index}</p></div>

						</div>
					)
				}
			</section>
		);
	}
}

export default DisplayInfo;
