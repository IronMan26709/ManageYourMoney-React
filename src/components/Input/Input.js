import React from "react";
import "./Input.css";



class Input extends React.Component {
	constructor(props){
		super(props)
		this.props = props
		this.state= {
			nesesorily: false,
			currentInput:{},
			strValue: "",
			numValue: 0,
			type: "string",
		}
	}
	componentDidMount= () => {
		this.isItNesesory()
	 }
	isItNesesory = () => {
		let triger = this.props.nesesorily
		triger ==="true" ?this.validetInput() : this.simpleInput()
	}
	validetInput = () => {
		const label = this.refs.label
		label.className ="control-label"
	}
	simpleInput = () => {
		const label = this.refs.label
		label.className ="control-label-2"
	}
	typeValid (event) {
		this.setState({ currentInput: event.target})
		let currentInput = event.target
		let theInput = event.target.value 
		let input = Number(theInput)
		
		switch(event.target.type){
			case"number": 
			    currentInput.oninput="validity.valid||(value='');"
			    input > 0 ? currentInput.style.background = "#79f487": currentInput.style.background = "#fff"
			    currentInput.value.match(/^\d+/)
			    currentInput.min = 0
			    switch(event.target.title){}
		    break
			case"text":
				theInput !== "" ? currentInput.style.background = "#79f487": currentInput.style.background = "#ffff"
			break
		}
	}
	// selectValidWay(){
	// 	switch(this.props.title){
	// 		case "Amount": this.describevalid()
	// 			break
	// 		case "Describe receipt": this.describevalid()
	// 			break
	// 		// case "Comment": this.commentValid()
	// 	}
	// }
	// describevalid() {
	// 	let inp = this.refs.inp
	// 	this.valid()
		// if(!inp.value.match(/^\d+/))
	// }
	// valid(){
	// 	let inp = this.refs.inp
		
	// 	// this.typeValid()
	// 	// this.selectValidWay()	
	// }

	render() {
		return(
			<section title nesesorily className={this.props.className } >
	            <label className="control-label" ref={"label"}  htmlFor={this.props.htmlfor}>{this.props.title}</label>
	            <input type={this.props.type} ref={"inp"} onChange={this.typeValid.bind(this)} className="form-control" />
	        </section>
		);
	}
	
}

export default Input