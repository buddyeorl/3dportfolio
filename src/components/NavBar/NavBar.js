import React, { Component } from "react";
import "./NavBar.css";

class NavBar extends Component {
	render(props) {
		return (
			<nav className="navbar fixed-top justify-content-right">
				<ul>
					<a className="navbar-brand" href="#">Home</a>
					<a className="navbar-brand" href="#">About</a>
					<a className="navbar-brand" href="#">Contact</a>
					<a className="navbar-brand" href="#">Portfolio</a>
				</ul>
			</nav >
		);
	}
}

export default NavBar;




