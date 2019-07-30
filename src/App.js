import React, { Component } from "react";
import logo from "./logo.svg";

import * as style from "./styles/test.module.css";

import Card from "./components/card";
import Card2 from "./components/card2";

class App extends Component {
	state = { counter: 0 };

	handler = () => {
		this.setState({ counter: this.state.counter + 1 });
	};

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

				<Card />

				<Card2 />
			</div>
		);
	}
}

export default App;

// title={`I am clicked ${this.state.counter} times`}
