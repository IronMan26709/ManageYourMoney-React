import React from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Template from "../ComponentTemplate/ComponentTemplate";
import Select from "../Select/Select";
import "../../styles/SympleComponent.css";
import "./NewExpense.css"



export default ()=>{
	return(
		<div className="NewExpense">
			<Template title="New Expense"/>
			<div className="mainBlock">
				<Input className="InputElem" id="input" type="text" title="Describe expense"/>
				<Input className="InputElem" id="input" type="number"title="Cost"/>
				<Select className="InputElem" type="select"title="Select wallet"/>
				<Input className="InputElem" id="input" type="date"title="Date"/>

				<Button title="New Expense" />
			</div>
		</div>
	)
}  