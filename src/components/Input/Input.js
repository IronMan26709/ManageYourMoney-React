import React from "react";
import "./Input.css";



class Input extends React.Component {
	constructor(props){
		super(props)
		this.props = props
		this.state= {
			required: false,
			strValue: "",
			numValue: 0,
			type: "string",
		}
	}
	componentDidMount= () => {
		this.isItRequired()
	 }
	isItRequired = () => {
		let triger = this.props.required
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
		let currentInput = event.target
		let currentInputFiles = event.target.files
		let theInput = event.target.value 
		let input = Number(theInput)
		let validInput = ()=>{
			if(this.props.required ==="true")
			currentInput.style.background = "#79f487"
		} 
		let inValidInput = ()=>{
			currentInput.style.background = "#fff"
		}
		switch(event.target.type){
			case"number": 
			    currentInput.oninput="validity.valid||(value='');"
			    input > 0 ? validInput(): inValidInput()
			    currentInput.value.match(/^\d+/)
			    currentInput.min = 0
		    break
			case"text":
				theInput.match(/[0-9a-zA-Z]/) ? validInput(): inValidInput()	
			break
			case"email":
				theInput.indexOf("@") > 0 &&  theInput.indexOf(".") > 0 ? validInput(): inValidInput()
			break
			case"password":
				theInput.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/) ? validInput(): inValidInput()
			break
			case"file":
				for ( var file of currentInputFiles ) {
			        if ( file.type.split('/')[0] !== 'image' )
			        	 document.write("Это не фото!!!!")
			        }
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
			<section  required className={this.props.className } >
	            <label className="control-label" ref={"label"}  htmlFor={this.props.htmlfor}>{this.props.title}</label>
	            <input disabled={this.props.disabled} onChange = {this.props.onChange} type={this.props.type} value = {this.props.value} className="form-control" />
	        </section>
		);
	}
	
}

export default Input