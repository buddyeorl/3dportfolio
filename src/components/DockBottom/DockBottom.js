import React, { Component } from "react";
import "./DockBottom.css";
import { socialAccs, socialUrls } from '../../variables/Variables.js';

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
									<img src={"./assets/img/sn/" + (index + 1) + ".png"} alt="none" target="_blank" />
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
