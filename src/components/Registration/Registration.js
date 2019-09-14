import React,{Component} from "react";
import "./Registration.css";
import Preview from "../Preview/Preview.js";
import "../Button/Button.css";
import Template from "../ComponentTemplate/ComponentTemplate.js";
import Button from  "../Button/Button.js";
import RegistrComponent from "../../containers/Registration";
import * as actions from "../../actions/Registration";
import {connect} from "react-redux";
import axios from "axios"

const FORM_TEMPLATE = {
	name: {
		type: "name",
		name: "name",
		className:"form-control",
	 	ClassName:"control-label",
		required:"true",
		title: "Name",
		value: "",
		validate: {
			require: {
				cb: v => v.trim() === ""
			}
		},
		touch: false,
		valid: false
	},
	email: {
		type: "email",
		name: "email",
		className:"form-control",
	 	ClassName:"control-label",
		required:"true",
		title: "Email",
		value: "",
		validate: {
			require: {
				cb: v => v.trim() === ""
			}
		},
		touch: false,
		valid: false
	},
	phoneNumber: {
		type: "tel",
		name: "phoneNumber",
		className:"form-control",
	 	ClassName:"control-label-2",
		title:"Phone number",
		required:"true",
		value: "",
		validate: {
			require: {
				cb: v => v.trim() === ""
			},
			minL: {
				cb: v => v.trim().length < 6
			}
		},
		touch: false,
		valid: false
	},
	password: {
		type: "password",
		name: "password",
		className:"form-control",
	 	ClassName:"control-label",
		title:"Password",
		required:"true",
		value: "",
		validate: {
			require: {
				cb: v => v.trim() === ""
			},
			minL: {
				cb: v => v.trim().length < 6
			}
		},
		touch: false,
		valid: false
	},
	confirmPassword: {
		type: "password",
		name: "confirmPassword",
		className:"form-control",
	 	ClassName:"control-label",
		title:"confirmPassword",
		required:"true",
		value: "",
		validate: {
			require: {
				cb: v => v.trim() === ""
			},
			minL: {
				cb: v => v.trim().length < 6
			},
			match: {
 				cb: (v, p) => v !== p,
				field: "password"
			}
		},
		touch: false,
		valid: false
	},

	
	 
};
 class Registration extends Component {
	state = {
		form:FORM_TEMPLATE,
		formValid: false,
	}

	validator = (prevValue,value,form,name) => {
		console.log("prevValue",prevValue)
		// console.log("form",form)
		// let validInput = ()=>{

		// 	this.setState(prevState => ({
		// 	...prevState,
		// 	form: {
		// 		...prevState.form,
		// 		[name]: {
		// 			...prevState.form[name],
		// 			className: "form-control-valid"
		// 			}
		// 		}
		// 	}));
		// }
		// switch(prevValue.type){
		// 	case"email":
		// 		prevValue.value.indexOf("@") > 0 &&  prevValue.value.indexOf(".") > 0 ? validInput(): console.log("is not valided")
		// 	break
		// }

	};
	
	onChangeHandler = e => {
		
		const { value, name, className,form } = e.target;
		let event = e.target
		this.setState(prevState => ({
			...prevState,
			form: {
				...prevState.form,
				[name]: {
					...prevState.form[name],
					value,
					touch: true,
					valid: this.validator(prevState.form[name],name, value, className, form)
				}
			}
		}));
	};

	
	getAllValues = () => {
		let form = this.state.form
		return Object.keys(form).reduce((prev, elem) => {
			return ({ ...prev, [elem]:form[elem].value });
		}, {});
	};


	changerEvent = ()=>{
		const mail = {email: this.state.form.email.value}
		let {changeEvent} = this.props
		changeEvent(mail) 	
	};
	sendAxios = payload => {
		const {registrationRequest} = this.state
		return dispatch => {
			console.log(payload)
			dispatch(registrationRequest()); 
			axios({
				method: "GET",
				url: "http://fea13-andrew.glitch.me/owner",
				// data: payload
			})
				.then(res => console.log("It is ok"))
				.catch(err => console.log("It is Fail"));
		};
	};




    submitEvents = e => {

    	const{registration} = this.state;
		e.preventDefault();
		const values = this.getAllValues();


		const auth = payload => {
			console.log("registrationSuccess",registrationSuccess)
			return dispatch => {
				dispatch(authRequest());

				axios({
					method: "POST",
					url: "http://fea13-andrew.glitch.me/owner",
					data: {
				          name: this.state.form.name.value,
				          email: this.state.form.email.value,
				          passHash: this.state.form.password.value
				        }
				})
					.then(res => dispatch(registrationSuccess(res)))
					.catch(err => dispatch(registrationFail(err)));
			};
		// axios ({
		// 	method:"POST",
		// 	url:"http://fea13-andrew.glitch.me/owner",
		// 	data: {
	 //          name: this.state.form.name.value,
	 //          email: this.state.form.email.value,
	 //          passHash: this.state.form.password.value
	 //        }
  //     })
	 //        .then(res =>console.log(res))
		// 	.catch(err =>console.log(err))
 		};
 	}
	render(){
		const {form} = this.state
		return (
			<div className="compWrap">
				<Template/>
				<div className="mainPart">
					<div className="leftPart">
						<Preview className="previewWrap"/>
					</div>
					<div className="rightPart">
						<form>
							{Object.keys(form).map(el => (
									<section key={el}>
										<label  className={form[el].ClassName}>{form[el].title}</label>
										<input
											required={form[el].required}
											
										    className = {form[el].className}
											name={form[el].name}
											value={form[el].value}
											onChange={this.onChangeHandler}
											type={form[el].type}
											valid={form[el].valid}
											touch={form[el].touch}
										/>
									</section>
									
							))}	
						</form>
						<button type="button" onClick = {this.submitEvents.bind(this)} className="button" >Register</button>
						{this.props.user == undefined?"":<div>{this.props.user.email}</div>}
						<button type="button" onClick = {this.changerEvent.bind(this)} >Changer</button>
					</div>
				</div>		
			</div>
		);
	}
}
const mapStateToProps = state => {
	return {
		// isFetching: state.auth.isFetching,
		user: state.userRegistration.user
	};
};

export default connect(
	mapStateToProps,
	actions
)(Registration);







// if(this.props.required ==="true")
		
			// const e = this.state.event.className
			// console.log('event',e)
			// const className = "form-control-valid"

		
		        // this.setState( prevState=> ({...prevState, className:"form-control-valid" }));




// validator = (event)=>{
	// 	let form = this.state.form
	// 	let [type] = Object.keys(this.state.form)
	// 	console.log(event)
	// }








	// switch(prevValue.type){
		// 	case"number": 
		// 	    prevValue.oninput="validity.valid||(value='');"
		// 	    prevValue.value > 0 ? validInput(): inValidInput()
		// 	    prevValue.value.match(/^\d+/)
		// 	    prevValue.min = 0
		//     break
		// 	case"text":
		// 		prevValue.value.match(/[0-9a-zA-Z]/) ? validInput(): inValidInput()	
		// 	break
			// case"email":
				// prevValue.value.indexOf("@") > 0 &&  prevValue.value.indexOf(".") > 0 ? validInput(): inValidInput()
			// break
		// 	case"password":
		// 		prevValue.value.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/) ? validInput(): inValidInput()
		// 	break
			// case"file":
			// 	for ( var file of currentInputFiles ) {
			//         if ( file.type.split('/')[0] !== 'image' )
			//         	 document.write("Это не фото!!!!")
			//         }
			// break
		// }






	// 	// const valid = Object.keys(rules).reduce((prev, elem) => {
	// 	// 	if (prev) return true;
	// 	// 	const check =rules[elem].cb(value)
			
	// 	// 	//  prevValue[rules[elem].field]
	// 	// 	// if (!prev && check) return check;

	// 	// 	return false;
	// 	// }, false);
	// 	// console.log("valid",valid )

	// 	// return valid;




	// sendRequest = () => {
	// 	const values = Object.keys(this.state.form).reduce((prev, elem) => {
	// 		return { ...prev, [elem]: this.state.form[elem].value };
	// 	}, {});

	// 	this.props.submitEvent(values);
	// };