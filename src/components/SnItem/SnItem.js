import React, { Component } from "react";
import "./SnItem.css";

class SnItem extends Component {
	render(props) {
		return (
			<div className="snItem">
				<p>{this.props.name}</p>
				<p>{this.props.description}</p>
			</div>
		);
	}
}

export default SnItem;
