import React, { Component } from "react";
import "./DisplayInfo.css";
const titles = ["JS", "MongoDB", "Deep Learning", "React", "Full Stack", "Fun", "Full Stack App", "Blockchain", "Jupyter Books"];
const descriptions = "";
const initialSize = 50; //in percentage
let displayInfoQty = []; // titles.length will set the size of this array to hold the displayInfo card initial size
for (let i = 0; i < titles.length; i++) {
	displayInfoQty.push(initialSize);
}
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
	}
	render(props) {
		return (
			<section className="displayInfoContainer b-5 p-5 w-75 align-items-center" >
				{
					titles.map((title, index) =>
						<div key={index + "displayInfo"} id={index + "displayInfo"} className={"displayInfoCard w-" + this.state.displayInfoResize[index] + " p-3"} onMouseOver={this.handleClick.bind(this, index)} onMouseOut={this.handleMouseLeave.bind(this, index)} >
							<p>{title}{index}</p>
							<p>A small project using JS</p>
						</div>
					)
				}
			</section>
		);
	}
}

export default DisplayInfo;
