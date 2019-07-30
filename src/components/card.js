import React from "react";

import Button from "./button";

export default class Card extends React.Component {
	render() {
		console.log("this", this.props);
		return (
			<div className="card">
				{this.props.children}
				I am control Card
				<Button title="INC" onClick={this.props.handlerInc} disabled type="submit" adfsdf="dsfdsfs" />
				<Button title="DEC" onClick={this.props.handlerDec} />
			</div>
		);
	}
}
