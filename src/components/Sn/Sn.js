import React, { Component } from "react";
import "./Sn.css";
const socialAccs = ["twitter", "linkedin", "facebook", "github", "linkedin", "facebook", "github"];

class Sn extends Component {
	render() {
		return (
			<section className="snContainer row b-5 m-0 p-5">

				{
					socialAccs.map((social, index) =>
						<div className="snCard col-2 mt-5">
							{social}
							<div class="text-center">
								<img src="twitter.png" class="imgClass rounded" alt="twitter.png" />
							</div>
						</div>
					)
				}

			</section>
		);
	}
}

export default Sn;
