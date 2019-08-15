import React, { Component } from "react";
import Router from "./Router";
import "./styles/footer_style.css";
import "./styles/App.css";
import "./styles/header_style.css";
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import {BrowserRouter} from "react-router-dom" 


class App extends Component {
	render() {
		return (
			<div className="app" >	
				<BrowserRouter >
					<Router />
				</BrowserRouter>
				<Footer/>
			</div>
		);
	}
}

export default App;