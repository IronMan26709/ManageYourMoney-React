import React from "react";
import "./Input.css";



class Input extends React.Component {
	constructor(props){
		super(props)
		this.props = props
	}
	selectValidWay(){
		switch(this.props.title){
			case "Describe receipt": this.describevalid()
				break
			case "Comment": this.commentValid()
		}

	}
	describevalid() {
	let inp = this.refs.inp
	console.log(inp)
	inp.style.color = "green"
	}

	commentValid() {
		console.log("Comment Valid")
	}

	render() {
		return(
			<section className={this.props.className}>
	            <label className="control-label" htmlFor={this.props.htmlfor}>{this.props.title}</label>
	            <input type={this.props.type} ref={"inp"} onChange={()=>this.selectValidWay()} className="form-control" />
	        </section>
		);
	}
	
}

export default Input