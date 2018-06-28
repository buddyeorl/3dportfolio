import React, { Component } from "react";
import "./DockBottom.css";
const socialAccs = ["alizarraga", "buddyeorl", "@buddyeorl", "Alex", "alexander_lizarraga@ymail.com"];
const socialUrls = ["https://www.linkedin.com/in/alizarraga/", "https://github.com/buddyeorl", "https://twitter.com/buddyeorl", "https://www.facebook.com/alexander.lizarraga.144", "mailto: alexander_lizarraga@ymail.com"];

class DockBottom extends Component {
	render() {
		return (
			<div className="dock">
				<ul className="ulClass">
					{
						socialAccs.map((social, index) =>
							<li key={index + "SnDiv"}>
								<a href={socialUrls[index]}>
									<em>
										<span>{social}</span>
									</em>
									<img src={"./assets/img/sn/" + (index + 1) + ".png"} alt="none" />
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
