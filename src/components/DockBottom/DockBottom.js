import React, { Component } from "react";
import "./DockBottom.css";
const socialAccs = ["LinkedIn", "Github", "Twitter", "Facebook", "alexander_lizarraga@ymail.com"];


class DockBottom extends Component {
	render() {
		return (
			<div className="dock">
				<ul className="ulClass">
					{
						socialAccs.map((social, index) =>
							<li key={index + "SnDiv"}>
								<a href="#chrome">
									<em>
										<span>{social}</span>
									</em>
									<img src={"./assets/img/sn/" + (index + 1) + ".png"} />
								</a>
							</li>
						)
					}
				</ul>
			</div>
		);
	}
}

export default DockBottom;
