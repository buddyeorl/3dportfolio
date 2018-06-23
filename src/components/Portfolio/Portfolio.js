import React, { Component } from "react";
import "./Portfolio.css";
import LeftMessage from '../LeftMessage';


class Portfolio extends Component {
	render() {
		return (
			<div className="portfolio w-100 p-0 b-0">
				<div className="divPortfolio w-25 h-100">
					<div className="divPortfolio w-100 h-50">
						<LeftMessage />
					</div>
					<div className="divPortfolio w-100 h-50">
						maybe a mouse follower anchor
					</div>
				</div>
				<div className="divPortfolio w-50 h-100">
					<div className="divPortfolio w-100 h-25 p-5">
						<h1>This will hold the type of the project</h1>
					</div>
					<div className="divPortfolio w-50 h-25 p-5">
						<h5>
							this will hold a brief description of the website.
						</h5>
					</div>
					<div className="divPortfolio w-50 h-25  p-5">
						this will hold an image of the site. and link if clicked.
					</div>
					<div className="divPortfolio w-50 h-25 p-5">
						<h5>
							this will hold another picture. and link. maybe.
						</h5>
					</div>
					<div className="divPortfolio w-50 h-25 p-5">
						<ul>
							<li>here I'll put</li>
							<li>a list of</li>
							<li>the technologies used</li>
						</ul>
					</div>
					<div className="divPortfolio w-100 h-25 p-5">
						<h2>this will hold quote describing the project</h2>
					</div>
				</div>
				<div className="divPortfolio w-25 h-100 p-5">
					big text in here or big picture or landing pages
				</div>
			</div >
		);
	}
}

export default Portfolio;
