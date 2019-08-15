import React from "react";
import Input from "../Input/Input";
import Template from "../ComponentTemplate/ComponentTemplate";
import Button from "../Button/Button";
import "../../styles/SympleComponent.css";
 
 class NewArrival extends React.Component{
	constructor(){
		super()
	}
	amountValidation(e){
		console.log(this.refs.inp.value)
	}
	render(){
		return(
			<div className="NewArrival">
				<Template title="New Arrival"/>
				<div className="mainBlock">
				<input className="InputElem" ref={"inp"} type="number" title="Amount" onChange={this.amountValidation.bind(this)}/>
					<Input className="InputElem"  type="text" title="Describe receipt" />
					<Input className="InputElem"  type="text" title="Comment"/>
					<Button title="New Arrival" click={(e) => console.log(this)} />
				</div>
			</div>
		)
   }

}

export default NewArrival
