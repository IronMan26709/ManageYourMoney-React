import React from "react";
import Input from "../Input/Input";
import Template from "../ComponentTemplate/ComponentTemplate";
import Button from "../Button/Button";
import "../../styles/SympleComponent.css";
 
 class NewArrival extends React.Component{
	constructor(){
		super()
	}
	render(){
		return(
			<div className="NewArrival">
				<Template title="New Arrival"/>
				<div className="mainBlock">
					<Input className="InputElem" required="true" type="number" title="Amount"/>
					<Input className="InputElem" required="false"type="text" title="Describe receipt" />
					<Input className="InputElem" required="true" type="text" title="Comment"/>
					<Button title="New Arrival" click={(e) => console.log(this)} />
				</div>
			</div>
		)
   }

}

export default NewArrival
