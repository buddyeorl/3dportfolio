import React, { Component } from "react";
import "./DisplayItems.css";
import Item from '../Item';
const titles = ["JS", "MongoDB", "Deep Learning", "React", "Full Stack", "Fun", "Full Stack App", "Blockchain", "Jupyter Books"];
const descriptions = "";

class DisplayItems extends Component {
	render() {
		return (
			< section className="section parallax bg3 displayHolder row justify-content-center p-5" >
				{
					titles.map((title, index) =>
						<div className="col- m-1 p-3">
							<Item name={title} description="A small project using JS" />
						</div>
					)
				}
			</section >
		);
	}
}

export default DisplayItems;
