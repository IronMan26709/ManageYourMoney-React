import React from "react";
import Template from "../ComponentTemplate/ComponentTemplate.js";
import Input from "../Input/Input.js";
import Button from "../Button/Button.js";
import "../../styles/SympleComponent.css";


export default ()=>{
	return(
			<div className="SignIn">
				<Template title="Sign In"/>
				<div className="mainBlock">
					<Input className="InputElem" nesesorily="true" id="input" type="name" title="Enter your name"/>
					<Input className="InputElem" nesesorily="true" id="input" type="email"title="Enter your email"/>
					<Button title="Sign In" />
				</div>
			</div>
	)
}