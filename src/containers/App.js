import React, { Component } from "react";
import logo from "../logo.svg";

import * as style from "../styles/test.module.css";

import Card from "../components/card";
import Card2 from "../components/card2";

import Button from "../components/button";
import GenRandomString from "../components/generateRandomString";

function NumberDescriber(props) {
	let description;
	if (props.number % 2 === 0) {
		description = <strong>even</strong>;
	} else {
		description = <i>odd</i>;
	}
	return (
		<div>
			{props.number} - это {description} число
		</div>
	);
}

function User(props) {
	return <li>{props.user.name}</li>;
}

function UserList() {
	const users = [{ id: 1, name: "Вася" }, { id: 2, name: "Петя" }];
	return (
		<ul>
			{users.map(user => (
				<User key={user.id} user={user} />
			))}
		</ul>
	);
}

class App extends Component {
	state = { counter: 0, randomNumber: 6 };

	handlerInc = () => {
		this.setState({ counter: this.state.counter + 1 });
	};

	handlerDec = () => {
		this.setState({ counter: this.state.counter - 1 });
	};

	generate = () => this.setState({ randomNumber: Math.floor(Math.random() * 6 + 1) });

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p className="color">
						Edit <code className={style.testOLOLO}>src/App.js</code> and save to reload.
					</p>
					<a className="App-link fs" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
						Learn React
					</a>
				</header>

				<Card handlerInc={this.handlerInc} handlerDec={this.handlerDec}>
					{<span>I AM CHILDREN</span>}
				</Card>

				<Card2 exist foo={1 + 2 + 3 + 4} counter={this.state.counter} />

				<NumberDescriber number={300} />

				<UserList />

				<div className="generator-box">
					<GenRandomString number={this.state.randomNumber} />

					<Button title="GENERATE" onClick={this.generate} />
				</div>
			</div>
		);
	}
}

export default App;

// title={`I am clicked ${this.state.counter} times`}
