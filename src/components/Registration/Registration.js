import React from "react";
import "./Registration.css"
import Preview from "../Preview/Preview.js";
import Input from  "../Input/Input.js";
import Template from "../ComponentTemplate/ComponentTemplate.js";
import Button from  "../Button/Button.js";



export default ()=>{
	return (
		<div className="compWrap">
			<Template/>
			<div className="mainPart">
				<div className="leftPart">
					<Preview className="previewWrap"/>
				</div>
				<div className="rightPart">
					<form>
						<Input id="input" type="name" title="Enter your name"/>
						<Input id="input" type="email" title="Enter your email"/>
						<Input id="input" type="password" title="Enter your password"/>
						<Input id="input" type="password" title="Repeat password"/>
						<Input id="input" type="file" title="Choose your photo"/>
					</form>
					<Button className="wrapButton" title="Register"/>
				</div>
			</div>		
		</div>
	);
}