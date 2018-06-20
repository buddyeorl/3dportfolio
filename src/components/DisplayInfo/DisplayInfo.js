import React, { Component } from "react";
import "./DisplayInfo.css";
const titles = ["JS", "MongoDB", "Deep Learning", "React", "Full Stack", "Fun", "Full Stack App", "Blockchain", "Jupyter Books"];
const descriptions = "";

class DisplayInfo extends Component {
	render() {
		return (
			<section className="displayInfoContainer row b-0 m-0 p-2">
				{
					titles.map((title, index) =>
						<div className="displayInfoCard col-6 mx-0 p-0">
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
