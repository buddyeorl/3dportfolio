import React, { Component } from "react";
import "./NavBar.css";

class NavBar extends Component {
	render(props) {
		return (
			<nav className="navbar fixed-top justify-content-right">
				<ul>
					<a className="navbar-brand" href="#homeStart">Home</a>
					<a className="navbar-brand" href="#homeStart">About</a>
					<a className="navbar-brand" href="#contactStart">Contact</a>
					<a className="navbar-brand" href="#portfolioStart">Portfolio</a>
				</ul>
			</nav >
		);
	}
}

export default NavBar;




