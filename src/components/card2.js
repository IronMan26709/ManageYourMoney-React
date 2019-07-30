import React, { Component } from "react";

export default class Card2 extends Component {
	render() {
		console.log("card 2", this.props);
		return (
			<div className="card2">
				<span>I am show result to you! </span>

				<p>{this.props.counter} - clicked</p>
			</div>
		);
	}
}
