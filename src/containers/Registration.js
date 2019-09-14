import React from "react"


export default () =>{
const FORM_TEMPLATE = {
	email: {
		type: "email",
		name: "email",
		value: "",
		touch: false,
		valid: false
	},
}


 let sendRequest = () => {
		const values = Object.keys(this.state.form).reduce((prev, elem) => {
			return { ...prev, [elem]: this.state.form[elem].value };
		}, {});

		this.props.submitEvent(values);
	};
}